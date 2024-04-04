import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home color ={user.color}name={user.name} city={user.city} />
      <About bio = "I made this!" url={user.links.github} linkText={user.links.github} urlTwo={user.links.linkedin} linktextTwo={user.links.linkedin}/>
    </div>
  );
}

export default App;
