import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const uniqueItems = [
  {
    title: "Having two mothertongues",
    uniquedescription:
      "Growing up with two parents who speak German whith each other I learned it growing up alongside with Swedish."
  },
  {
    title: "Running 30 kilometers a week",
    uniquedescription:
      "Iast year I really picked up an interest for running. Now I run about 30 kilometers each week, training for a race in Gothenburg this Saturday. Göteborgsvarvet."
  },
  {
    title: "Playing strategy games",
    uniquedescription:
      "In my spare time I really enjoy playing video games. In particular I like slow strategy games like Civilization or Stellaris. To me it's really interesting how you make decisions and see how they turn out in the long run"
  },
  {
    title: "Teach React",
    uniquedescription: "I love to teach React "
  }
];
//Using Array.map( function () {})
//const titles = uniqueItems.map( item => item.title  )
//const description = uniqueItems.map( item => item.description  )

function Header() {
  return <h1>Header</h1>;
}

function Paragraph(props) {
  return (
    <div>
      {props.title ? <h4>title:{props.title}</h4> : null}
      <p>{props.children}</p>
    </div>
  );
}

function UniqueFact(props) {
  return (
    <div>
      {props.title ? <h4>title:{props.title}</h4> : null}
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  //const introText = "My name is Eskil";
  return (
    <div className="App">
      <Header />
      {uniqueItems.map(item => (
        <UniqueFact title={item.title} description={item.uniquedescription} />
      ))}
    </div>
  );
}

export default App;
