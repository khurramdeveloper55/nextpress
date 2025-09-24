import axios from "axios";

export async function signup(formData) {
  const res = await axios.post("/api/signup", formData);
  return res.data;
}

export async function login(loginData) {
  const res = await axios.post("/api/login", loginData);
  return res.data;
}

export async function getMe() {
  const res = await axios.get("/api/me", {
    withCredentials: true,
  });
  return res.data;
}
