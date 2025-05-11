import { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  //   const [person, setPerson] = useState(initialPerson);

  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Whose name would you like to change?`);
    const current = prompt(`What would you like to change the name to?`);

    dispatch({ type: "updated", prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`What is your new mentor's name?`);
    const title = prompt(`What is your new mentor's title?`);
    dispatch({ type: "added", name, title });
  };

  const handleDelete = () => {
    const name = prompt(`Who would you like to delete?`);
    dispatch({ type: "deleted", name });
  };

  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name}({mentor.title})
          </li>
        ))}
      </ul>
      <Button onClick={handleUpdate} text="Change name of mentor" />

      <Button onClick={handleDelete} text="Delete Mentor" />

      <Button onClick={handleAdd} text="Add New Mentor" />
    </div>
  );
}

const initialPerson = {
  name: "Ellie",
  title: "Developer",
  mentors: [
    {
      name: "Bob",
      title: "Senior Developer",
    },
    {
      name: "James",
      title: "Senior Developer",
    },
  ],
};

function Button({ text, onClick }) {
  console.log("Button", text, "re-rendering");

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {text}
    </button>
  );
}
