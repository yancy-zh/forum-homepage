import React, { Component } from "react";
import { Flex } from "antd";
import Poster from "./Poster.js";
function findUserById(id, users) {
  return users.find((user) => user.id === id);
}
function PostersAvatars({ lsUsers, lsPosters }) {
  return (
    <Flex gap="middle" horizontal="true">
      {lsPosters.map((e, i) => (
        <Poster i={i} user={findUserById(e.user_id, lsUsers)}></Poster>
      ))}
    </Flex>
  );
}

export default PostersAvatars;
