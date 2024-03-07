import React, { Component } from "react";
import { Flex } from "antd";
function findUserById(id, users) {
  return users.find((user) => user.id === id);
}
function PostersAvatars({ lsUsers, lsPosters }) {
  return (
    <Flex gap="middle" horizontal="true">
      {lsPosters.map((e, i) => (
        <img key={i} src={findUserById(e.user_id, lsUsers).avatar_template}/>
      ))}
    </Flex>
  );
}

export default PostersAvatars;
