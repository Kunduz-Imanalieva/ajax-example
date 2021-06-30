import { useEffect, useState } from 'react';
import './App.css';
import Albums from './components/Albums/Albums';
import Comments from './components/Comments/Comments';
import FullPost from './components/FullPost/FullPost';
import Pictures from './components/Pictures/Pictures';
import Posts from './components/Posts/Posts';
function App() {
  const [selectedPost, setSelectedPost] = useState(0);
  const [selectedAlbum, setSelectedAlbum] = useState(0);
  console.log("[App.js] render");
  return (
    <div className="App">
      {/* <button onClick={() => setMessage("Bye")}>Toggle</button> */}
      {/* <Posts setSelectedPost={setSelectedPost} />
      <FullPost id={selectedPost}/> */}
      <Albums setSelectedAlbum={setSelectedAlbum}/>
      <Pictures id={selectedAlbum}/>
    </div>
  );
}
export default App;