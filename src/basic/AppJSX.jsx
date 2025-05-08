import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "Ellie";
  const list = ["Milk", "Strawberry", "Banana"];

  return (
    <div>
      <h1>{`Hello ${name}`}</h1>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppJSX;
