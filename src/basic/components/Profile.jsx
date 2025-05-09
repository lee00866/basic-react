import Avatar from "./Avatar";

// export default function Profile(props) {
export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <Avatar image={image} isNew={isNew}></Avatar>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
