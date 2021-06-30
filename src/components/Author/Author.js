import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Author.module.css";
const Author = ({ userId }) => {
  const [email, setEmail] = useState("Loading...");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((response) => {
        const email = response.data.email;
        setEmail(email);
      });
  }, [userId]);

  return (
    <main className={classes.Author}>
      <div>{email}</div>
    </main>
  );
};

export default Author;
