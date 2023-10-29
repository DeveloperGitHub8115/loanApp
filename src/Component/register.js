import { Button, Container, Input, Select } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "Customer",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
       console.log(formData);
    axios
      .post("http://localhost:4500/register", formData)
      .then((response) => {
        console.log("Registration successful:", response.data);


        // localStorage.setItem("userId", User._id);

        navigate("/home");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  const handleSign = () => {
    navigate("/signin");
  };

  return (
    <>
      <div style={{ position: "relative", top: 50 }}>
        <Container className="pt-5 pb-2 d-flex justify-content-center align-item-center">
          <div
            className="p-1 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "pink", width: 450, height: 550 }}
          >
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Name"
                name="userName"
                className="pt-2"
                onChange={handleChange}
                value={formData.userName}
              />
              <br />
              <Input
                type="text"
                placeholder="Email"
                name="email"
                className="pt-2"
                onChange={handleChange}
                value={formData.email}
              />
              <br />
              <Input
                type="password"
                placeholder="Password"
                name="password"
                className="pt-2"
                onChange={handleChange}
                value={formData.password}
              />
              <br />
              <Select className="mt-2" value={formData.role} name="role" onChange={handleChange}>
                <option value="Customer">Customer</option>
                <option value="Admin">Admin</option>
              </Select>
              <br />
              <Button type="submit" className="pt-3">
                Register
              </Button>
              <Button onClick={handleSign}>Sign In</Button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}
