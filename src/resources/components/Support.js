import support from "../images/support.jpg";
import { Container } from "react-bootstrap";
import "../css/Support.css";
import Header from "./Header";
import Footer from "./Footer";
function Support() {
  return (
    <>
    <header>
    <Header/>
    </header>
    <main>
      <Container >
        <h2 className="head-support">Support</h2>
        <img src={support} className="imgsz" alt="..."></img>
        <br />
        <br />
        <h3 className="center-msg">Send us your Query</h3>
        <form>
          <input type="text"></input>
        </form>
      </Container>
      </main>
      <footer>
      <Footer/>
      </footer>
    
    </>
  );
}
export default Support;
