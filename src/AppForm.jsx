import { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={(e) => {
          const { name, value } = e.target;
          setForm({ ...form, [name]: value });
        }}
      />
      <label htmlFor="email">email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={(e) => {
          const { name, value } = e.target;
          setForm({ ...form, [name]: value });
        }}
      />
      <button>Submit</button>
    </form>
  );
}
