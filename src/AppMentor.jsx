import { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Ellie",
    title: "Developer",
    mentor: {
      name: "Bob",
      title: "Senior Developer",
    },
  });

  return (
    <div>
      <h1>{person.name}는</h1>
    </div>
  );
}
