import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
function Slider() {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h3>React Bootstrap Carousel</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Book Your safe Ride</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>
                      A mission to deliver world class taxi service experience
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
