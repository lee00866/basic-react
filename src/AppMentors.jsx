import { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
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
      <button onClick={handleUpdate}>Change Mentor's name</button>

      <button onClick={handleDelete}>Delete Mentor</button>

      <button onClick={handleAdd}>Add New Mentor</button>
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
