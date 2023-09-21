// import axios from "axios";
// import { redirect } from "react-router-dom";

// const clientId = 'dj0yJmk9ek4zOExZRUNnMFpZJmQ9WVdrOU1rbGxOWEpQWTBFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWFm'
// const redirectUri = 'https://localhost:3000/dashboard'

// const clientSecret = '94e8b414d06bd19bb7f77a3de1ff061cb42bb34c'
// // const nonce = 'YihsFwGKgt3KJUh6tPs2'

// axios.get('/signin',(request,response) => {
//   // const lang = 'en-us'; // window.navigator.language;
//   //let url = `https://api.login.yahoo.com/oauth2/request_auth?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&nonce=${nonce}`;
//   let url = `https://api.login.yahoo.com/oauth2/request_auth_fe?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
//   response.redirect(url);
// });

// const logIn = () => {
//   const clientId = 'dj0yJmk9ek4zOExZRUNnMFpZJmQ9WVdrOU1rbGxOWEpQWTBFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWFm'
//   const redirectUri = 'https://localhost:3000/dashboard' // default = http://127.0.0.1:5173/
//   let url = `https://api.login.yahoo.com/oauth2/request_auth_fe?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
//   redirect(url)
// }
import { useAuth0 } from '@auth0/auth0-react'

const SignIn = () => {
  const { loginWithRedirect } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: 'dashboard'
      }
    })
  }

  return (
    <div className="text-white">
      <p>Sign In Component</p>
      <button type="button" onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default SignIn
