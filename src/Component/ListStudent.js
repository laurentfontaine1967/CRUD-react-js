import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListStudent() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  //   const loadUsers = async () => {
  //     const result = await axios
  //       .get("http://localhost/student/view.php")
  //       .then((result) => {
  //         if (result.data.status === "invalid") {
  //           alert("pb.try again");
  //         }
  //       });

  //     setStudent(result.data.records);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost/student/view.php");
      setStudent(result.data.records);
    } catch (err) {
      alert("no connection to database");
    }
    // Navigate("/");
  };
  const deleteUser = (id) => {
    axios
      .delete("http://localhost/student/delete.php", { data: { id: id } })
      .then((result) => {
        loadUsers();
      })
      .catch(() => {
        alert("pb.try again");
      });
  };

  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h1>List Student</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-2"> Id</div>
        <div className="col-md-2"> First Name</div>
        <div className="col-md-2"> Last Name</div>
        <div className="col-md-2">Email </div>
        <div className="col-md-2"> Update</div>
        <div className="col-md-2"> Delete</div>
      </div>
      {student.map((student, index) => (
        <div className="row mt-4">
          <div className="col-md-2">{index + 1}</div>
          <div className="col-md-2"> {student.first_name}</div>
          <div className="col-md-2"> {student.last_name}</div>
          <div className="col-md-2">{student.email} </div>
          <div className="col-md-2">
            <Link class="btn btn-success" to={`/edit-student/${student.id}`}>
              Edit
            </Link>
          </div>
          <div className="col-md-2">
            <Link
              to=""
              className="btn btn-danger"
              class="btn btn-danger"
              onClick={() => deleteUser(student.id)}
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ListStudent;
