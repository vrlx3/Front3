import React from "react";

function Home() {
  return (
    <div id="homePage">
      <img
        src="https://unsplash.com/photos/zjO7xkCogZM/download?force=true"
        alt="Yoga Picture"
        id="imgYoga"
      />{" "}
      <div id="homeMessage">
        Your Journey Starts Here
        <p>
          Check out some of our public routines or login for free for more
          customized experience.
        </p>
        <p>Let get started...</p>
      </div>
    </div>
  );
}

export default Home;
