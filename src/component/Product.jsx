import { useEffect, useState } from "react";

const Product = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      async function GetProduct() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      }
      GetProduct();
    } catch {
      console.log("Something went Wrong");
    }
  }, []);

  return (
    <div className="p-20">
      <table className="border   w-full">
        <thead>
          <tr>
            <th className="border w-[50px] border-r">Id</th>
            <th className="border border-r">Name</th>
            <th className="border border-r">UserName</th>
            <th className="border border-r">Email</th>
            <th className="border border-r">Address</th>
            <th className="border border-r">Phone</th>
            <th className="border border-r">Website</th>
            <th className="border border-r">Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr className="text-center">
              <td className="border border-r">{item.id}</td>
              <td className="border border-r">{item.name}</td>
              <td className="border border-r">{item.username}</td>
              <td className="border border-r">{item.email}</td>
              <td className="border border-r">{item.address.city}</td>
              <td className="border border-r">{item.phone}</td>
              <td className="border border-r">{item.website}</td>
              <td className="border border-r">{item.company.name}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
