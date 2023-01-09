import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const getFriends = async () => {
    let friends = await axios.get("http://localhost:8080/friends");
    setData(friends.data)
    console.log(friends.data)
  }

  useEffect(() => {
    getFriends();
  }, [])

  return (
    <div className="App">
      <h1 className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React</p>
        {data.map((friend) => <p>{friend.name}</p>)}
      </h1>
    </div>
  );
}

export default App;
