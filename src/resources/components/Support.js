import support from "../images/support.jpg";
import { Container } from "react-bootstrap";
import "../css/Support.css";

function Support() {
  return (
    <>
      <Container>
        <img src={support} className="imgsz" alt="..."></img>
        <br />
        <br />
        <div className="call">
          <h1>Feel free to contact</h1>
          <p>
            Phone Number:<t>9361611111</t>
          </p>
          <p>
            Email:<t>vishnuk55265@gmail.com</t>
          </p>
        </div>
      </Container>
    </>
  );
}
export default Support;
