import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  let history = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
    email: "",
    id: "",
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const { first_name, last_name, email } = student;

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const updateForm = async (e) => {
    e.preventDefault();
    console.log(student);

    await axios
      .post("http://localhost/student/update.php", student)
      .then((result) => {
        console.log(result);
        if (result.data.status === "valid") {
          history("/list-student");
        } else {
          alert("pb.try again");
        }
      });
  };

  const loadUsers = async () => {
    try {
      const result = await axios.get(
        "http://localhost/student/edit.php?id=" + id
      );

      setStudent(result.data);
    } catch (err) {
      alert("no connection to database");
    }
    // Navigate("/");
  };

  return (
    <div className="container">
      <div className="col-md-12 text-center">
        <h1>EditStudent</h1>
      </div>
      <div class="container">
        <form onSubmit={(e) => updateForm(e)}>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              first_name
            </label>
            <input
              type="text"
              name="first_name"
              class="form-control"
              id="exampleInputPassword1"
              value={first_name}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              last_name
            </label>
            <input
              type="text"
              name="last_name"
              class="form-control"
              id="exampleInputPassword1"
              value={last_name}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              email
            </label>
            <input
              type="text"
              name="email"
              class="form-control"
              id="exampleInputPassword1"
              value={email}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            name="submit"
            value="Add Student"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditStudent;
