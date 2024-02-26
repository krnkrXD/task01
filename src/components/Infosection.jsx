import infoImg from "../assets/3.png";
const Infosection = () => {
  return (
    <div className="information">
      <p style={{ textAlign: "left" }}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={infoImg} alt="information image" />
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr className="line" />
      <p>
        {" "}
        <b> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </b>
      </p>
      <p>
        CHEMICALS & PROCESS <span className="dash">|</span> POWER{" "}
        <span className="dash">|</span> WATER & WASTE WATER{" "}
        <span className="dash">|</span> OILS & GAS{" "}
        <span className="dash">|</span> PHARMA <span className="dash">|</span>{" "}
        SUGARS & DISTILLERIES <span className="dash">|</span> PAPER & PULP{" "}
        <span className="dash">|</span> MARINE & DEFENCE{" "}
        <span className="dash">|</span> METAL & MINING{" "}
        <span className="dash">|</span> FOOD & BEVERAGE{" "}
        <span className="dash">|</span> PETROCHEMICAL & REFINERIES{" "}
        <span className="dash">|</span> SOLAR <span className="dash">|</span>{" "}
        BUILDING <span className="dash">|</span> HVAC{" "}
        <span className="dash">|</span> FIRE FIGHTING{" "}
        <span className="dash">|</span> AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
};

export default Infosection;
