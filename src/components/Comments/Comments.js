import classes from "./Comments.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  const results = comments.map((comment) => (
    <div>
      <strong>{comment.name}</strong>
      <p>{comment.body}</p>
    </div>
  ));

  return <div className={classes.Comments}>{results}</div>;
};

export default Comments;
