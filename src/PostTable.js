import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import PostersAvatars from "./PostersAvatars.js";
function PostTable(props) {
  const [postsSource, setPostsSource] = useState([]);
  const [usersSource, setUsersSource] = useState([]);
  const getPosts = () => {
    const getPostsUrl = "https://forum-proxy.freecodecamp.rocks/latest";
    var wikiConfig = {
      timeout: 6500,
    };
    async function getJsonResp(url, config) {
      const res = await axios.get(url, config);
      return res.data;
    }
    return getJsonResp(getPostsUrl, wikiConfig)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log("an error occurred: " + error);
        return null;
      });
  };
  const generatePostLink = (baseUrl, id) => {
    return baseUrl + id;
  };
  useEffect(() => {
    getPosts().then((result) => {
      setPostsSource(result.topic_list.topics);
      setUsersSource(result.users);
    });
  }, []);
  const baseUrlPost = "https://forum.freecodecamp.org/t/";

  const numOfMilisecInHour = 1000 * 60 * 60;
  const calcDatetimeDiff = (last_posted_at) => {
    const currDateTime = new Date();
    let diff = Math.round(
      (currDateTime - new Date(last_posted_at)) / numOfMilisecInHour
    );
    if (diff < 1) return "< 1";
    else return diff;
  };
  const columns = [
    { key: "index", title: "#", render: (text, record, index) => index + 1 },
    {
      key: "title",
      title: "Topic",
      dataIndex: "title",
      render: (text, { id, title }) => (
        <a
          href={generatePostLink(baseUrlPost, id)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      ),
    },
    {
      key: "posters",
      title: "Posters",
      dataIndex: "posters",
      render: (text, { posters }) => (
        <PostersAvatars
          lsUsers={usersSource}
          lsPosters={posters}
        ></PostersAvatars>
      ),
    },
    { key: "reply_count", title: "Replies", dataIndex: "reply_count" },
    { key: "views", title: "Views", dataIndex: "views" },
    {
      key: "activities",
      title: "Activities",
      render: (_, record) => (
        <div>{calcDatetimeDiff(record.last_posted_at)}h</div>
      ),
    },
  ];
  return <Table rowKey="id" columns={columns} dataSource={postsSource}></Table>;
}

PostTable.propTypes = {};

export default PostTable;
