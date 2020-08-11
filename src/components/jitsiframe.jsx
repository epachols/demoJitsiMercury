import React from 'react'

export default function Jitsiframe() {

    const domain = "meet.jit.si";
        const options = {
          roomName: roomName,
          width: 700,
          height: 700,
          parentNode: document.querySelector("#meet"),
          userInfo: {
          // can do DB retrieval of person's login info based on session id, look into Oauth
          email: 'epacholski86@gmail.com',
          // Oauth will be necessary here, and really tie some awesomeness in.
          displayName: 'Big Snackum'
          },
          configOverwrite: {
          prejoinPageEnabled: false
          }
        };
        const api = new JitsiMeetExternalAPI(domain, options);
        return (
            <div>
               <div id="meet"></div> 
            </div>
        )
    }
