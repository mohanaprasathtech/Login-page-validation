import { useState } from 'react';
import './App.css';
import Loginform from './Loginform';


function App() {
  const adminuser = {
    email: "test@gmail.com",
    password:"test@123"
  };

  const[user,setUser]=useState({name: "",email:""});
  const[error,setError]=useState("");

  function Login(details) {
    

    if (details.email == adminuser.email && details.password == adminuser.password) {
      // console.log("Loged in");
      setUser({
        name:details.name,
        email:details.email
      });
    }
    else{
      console.log("error");
      setError("Invalid");
    }
  }

  function Logout() {
    setUser({name:"",email:""});
  }
  return (
    <div className="App">
           {user.email != "" ? (
             <div className="welcome">
               <h1>WELCOME <span>{user.name}</span></h1>
               <button onClick={Logout}>Logout</button>
             </div>
           ) : (
            <Loginform Login={Login} error={error}/>
           )}
    </div>
  );
}

export default App;
