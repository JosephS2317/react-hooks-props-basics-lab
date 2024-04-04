import React from "react";

function About({ bio, url, linkText, urlTwo, linktextTwo }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links url={url} linkText={linkText} urlTwo={urlTwo} linktextTwo={linktextTwo}/>
    </div>
  );
}

function Links({ url, linkText, urlTwo, linktextTwo}) {
  return (
    <h3 id="links">
      <a href={url}>{linkText}</a>
      <a href={urlTwo}>{linktextTwo}</a>
    </h3>
  );
}
export default About;
