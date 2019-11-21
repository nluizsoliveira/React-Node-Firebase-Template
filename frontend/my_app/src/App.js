import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

function App() {
  const [videos, setVideo] = React.useState()

  async function carregaVideos(){
    let requestContent = await axios.get('http://localhost:5000/devboost-9d38c/us-central1/api/videos');
    // console.log(requestContent.data)
    setVideo(requestContent.data);
  }


  async function pushVideo(){
    
    let requestContent = await axios.post('http://localhost:5000/devboost-9d38c/us-central1/api/videos',{
      link: 'https://www.youtube.com/watch?v=7AQG5-UIcBo'
    });

    setVideo(requestContent.data);
    console.log("oi")
    
  }

  async function deleteVideo(){
    let requestContent = await axios.delete('http://localhost:5000/devboost-9d38c/us-central1/api/videos');
    setVideo(requestContent.data);
    console.log("oi")
  }


  React.useEffect(() => {
    carregaVideos();
  }, [])

  console.log(videos)

  return (
    <div className="App">
      <button onClick = {pushVideo} >Colocar vídeo</button>
      <br></br>
      <br></br>
      <br></br>
      <button onClick = {deleteVideo} >Deletar vídeo</button>

      {videos}
    </div>
  );
}

export default App;
