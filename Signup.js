import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [msg, setMsg] = useState("");

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");

    const res = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 300 }}>
      <label>Name</label>
      <input name="name" onChange={update} />

      <label>Email</label>
      <input name="email" onChange={update} type="email" />

      <label>Password</label>
      <input name="password" onChange={update} type="password" />

      <button type="submit">Register</button>

      <p>{msg}</p>
    </form>
  );
}
