import axios from "axios";

export async function signup(formData) {
  const res = await axios.post("http://localhost:3000/api/signup", formData);
  return res.data;
}

export async function login(loginData) {
  const res = await axios.post("http://localhost:3000/api/login", loginData);
  return res.data;
}

export async function getMe() {
  const res = await axios.get("http://localhost:3000/api/me");
  return res.data;
}
