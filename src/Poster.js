import React from "react";
import "./Poster.css";

export default function Poster({ i, user }) {
  console.log("user: ", user);
  return (
    <a
      href={`https://www.freecodecamp.org/forum/u/${user.username}`}
      target="_blank"
    >
      <img
        title={user.username}
        key={i}
        src={`https://freecodecamp.org/forum${user.avatar_template.replace(
          "{size}",
          40
        )}`}
      />
    </a>
  );
}
