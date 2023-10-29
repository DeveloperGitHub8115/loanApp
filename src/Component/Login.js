import { Button, Container, Input } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
       navigate('/');

    axios
      .post("http://localhost:4500/login", formData)
      .then((response) => {
          
        console.log("Login successful:", response.data);
       
      })
      .catch((error) => {
        console.error("Login failed:", error);
       
      });
  };

  return (
    <>
      <Container className="pt-5 pb-2 d-flex justify-content-center align-item-center">
        <div
          className="p-1 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "lightblue", width: 450, height: 300 }}
        >
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
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
            <Button type="submit" className="pt-3">
              Login
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
