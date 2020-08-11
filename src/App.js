// import React, { useState } from 'react'; //TODO when we add usestate
import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';




function App() {
  
  const [roomName, setRoomName ]  = useState({
    roomName : 'evans-super-awesomely-secret-meeting-9238233h42938rhfuswefb32r9hj'
  }
  )
  const [userFullName, setFullName] = useState({
    userName: 'Evan the mighty SNACKO'
  })

  useEffect(()=> {
    jitsiMeetFrame();
  })

  const styles = {
    borderRadius: "50%"
  }

  function jitsiMeetFrame() {
    const domain = "meet.jit.si";
        const options = {
          roomName: {roomName},
          width: 700,
          height: 700,
          parentNode: document.querySelector("#meet"),
          userInfo: {
          // can do DB retrieval of person's login info based on session id, look into Oauth
          email: 'epacholski86@gmail.com',
          // Oauth will be necessary here, and really tie some awesomeness in.
          displayName: {userFullName}
          },
          configOverwrite: {
          prejoinPageEnabled: false
          }
        };
        const api = new window.JitsiMeetExternalAPI(domain, options);
        return api
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>


      {/* this meet div will be the container for the jitsi div */}
      <div id="meet" style={styles}/>


    </div>
  );
}

export default App;
