import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("ankit");
  const [email, setEmail] = useState("ankit@gmail.com");
  const [password, setPassword] = useState("majsdlkjflk");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table({ name, email, password });
    const { data } = await axios.post(`http://localhost:9000/api/register`, {
      name,
      email,
      password,
    });
    console.log("Register response", data);

    setEmail(() => "");
    setName(() => "");
    setPassword(() => "");
  };
  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />

          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />

          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />

          <br />

          <button className="btn btn-block btn-primary p-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
