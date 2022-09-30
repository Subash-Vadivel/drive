import Services from "./Services";
import Slider from "./Slider";
import Community from "./Community";
import Offers from "./Offers";
import Trip from "./Triptypes";
import Support from "./Support";
function Homes() {
  return (
    <>
      <Slider />
      <Offers />
      <Trip />
      <Services />
      <Community />
      {/* <Support /> */}
    </>
  );
}
export default Homes;
