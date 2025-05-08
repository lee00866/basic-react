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
      <h1>
        {person.name}is {person.title}
      </h1>
      <p>
        {person.name}'s mentor is {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`What's your mentor's name?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name },
          }));
        }}
      >
        Change Mentor's name
      </button>

      <button
        onClick={() => {
          const title = prompt(`What's your mentor's title?`);
          setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, title } }));
        }}
      >
        Change Mentor's title
      </button>
    </div>
  );
}
