import React, { useEffect, useState } from "react";
import Navbar1 from "../Component/Navbar1";
import Header1 from "../Component/Header1";
import axios from "axios";
import { toast } from "react-toastify";

function Managecontac() {
  const [data, setData] = useState([]);
  
  

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/Contac`);
    console.log(res.data);
    setData(res.data);
  };
    const deleteHandle = async(id)=>{
      const res = await axios.delete(`http://localhost:3000/Contac/${id}`);
      toast.success('Categories Delete sucees');
      fetch();
      
    }
  return (
    <div>
      <Navbar1 />
      <div className="container">
        <h2>Manage Contac</h2>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>number</th>
              <th>email</th>
              <th>button</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((Value) => {
                return (
                  <tr>
                    <td>{Value.id}</td>
                    <td>{Value.name}</td>
                    <td>{Value.number}</td>
                    <td>{Value.email}</td>
                    <td>
                     
                      <button className="btn btn-danger"onClick={() => deleteHandle(Value.id)}>Delete </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/*  */}
      </div>
      <Header1 />
    </div>
  );
}
export default Managecontac;
