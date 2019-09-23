import React, { Component } from 'react';
import './App.css';
import img from './images/backgroud.jpg';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class App extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <center>

        <div className="App">
          <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>


          <div className="buttons">
            <FacebookLogin
              appId="912664192439199"// facebook app id created by developer-facebook-login
              fields="name,email,picture"
              callback={responseFacebook}
            />
            <br />
            <br />
              <GoogleLogin
              clientId="1078052189000-td7om4iah6v0n2ve40lvn6s0glukovmu.apps.googleusercontent.com"//google app id created by developer-google-login
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>

        </div>
        <div className="picture">
          <ul>
            <img src="backgroud.jpg" />
          </ul>
        </div>
      </center>
    );
  }
}

export default App;
