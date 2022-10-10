import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./resources/css/App.css";
import Header from "./resources/components/Header";
import Footer from "./resources/components/Footer";
import Homes from "./resources/components/Homes";
import Partner from "./resources/components/Part";
function Home(props) {
  return (
    <>
      <header>
        <Header handleLogout={props.handleLogout} />
      </header>
      <main>
        <Homes />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default Home;
