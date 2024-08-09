import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Button from "./components/button";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="main-content">
        <h2>Welcome to the App</h2>
        <Button>Click Me</Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
