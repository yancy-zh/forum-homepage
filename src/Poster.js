import React from "react";
import "./Poster.css";
import { Avatar } from "antd";

export default function Poster({ i, user }) {
  console.log("user: ", user);
  return (
    <a
      href={`https://www.freecodecamp.org/forum/u/${user.username}`}
      target="_blank"
    >
      <Avatar
        shape="circle"
        size="large"
        src={`https://freecodecamp.org/forum${user.avatar_template.replace(
          "{size}",
          40
        )}`}
      ></Avatar>
    </a>
  );
}
