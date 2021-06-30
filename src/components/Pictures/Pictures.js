import classes from "./Pictures.module.css";
import {useState , useEffect} from "react";
import axios from "axios";

const Pictures = ({albumId}) => {
    const [pictures , setPictures] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId)
      .then((response) => {
        const pictures = response.data;
        setPictures(pictures);
      });
  }, [albumId]);
  const results = pictures.map((picture) => (
    <div key={picture.id} onClick={() => setPictures(picture.id)}>
        <img src={picture.thumbnailUrl} />
    </div>
));
    return ( <div className={classes.Pictures}>
        {results}
    </div>  );
}
 
export default Pictures;