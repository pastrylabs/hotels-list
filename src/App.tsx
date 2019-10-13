import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Rating from "./components/Rating/Rating";

const App: React.FC = () => {
  return <Rating rating={2.7} shape="star" />;
};

export default App;
