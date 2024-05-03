import { useState } from "react";

import "./App.css";

function App() {
  const [bill, setBill] = useState(""); //useRef()
  const [service, setService] = useState(0);
  const [people, setPeople] = useState("");
  const [output, setOutput] = useState({
    tip: 0,
    totalBill: 0,
    eachBill: 0,
  });
  //fn to calculate
  const handleSubmit = (e) => {
    e.preventDefault();
    const tipAmount = +bill * (+service / 100);
    const totalAmount = tipAmount + +bill;
    const eachAmount = totalAmount / +people;

    if (bill === 0 || people === 0) {
      alert("Enter valid inputs!");
    } else {
      setOutput({
        tip: tipAmount.toFixed(2),
        totalBill: totalAmount.toFixed(2),
        eachBill: eachAmount.toFixed(2),
      });
    }
    setBill("");
    setService(0);
    setPeople("");
  };
  console.log(Object.entries(output));
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <h1>Tip Calculator</h1>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <label className="form-control-lg">How much was your bill?</label>
            <br />
            <input
              type="number"
              step="0.01"
              id="bill"
              className="form-control-lg"
              placeholder="Bill amount"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              onClick={() => setOutput({})}
            />
            <br />

            <label className="form-control-lg">How was your service?</label>
            <br />
            <select
              id="service"
              className="form-control-lg"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option disabled value="0">
                --Choose an Option--
              </option>
              <option value="30">30% - Outstanding</option>
              <option value="20">20% - Good</option>
              <option value="15">15% - It was OK</option>
              <option value="10">10% - Bad</option>
              <option value="5">5% - Terrible</option>
            </select>
            <br />

            <label className="form-control-lg">
              How many people are sharing the bill?
            </label>
            <br />
            <input
              type="number"
              id="people"
              min="1"
              className="form-control-lg"
              placeholder="Number of people"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            />
            <span> people</span>
            <br />
            <input
              id="btn"
              className="btn btn-danger"
              type="submit"
              value="Calculate"
            />
            <div id="output" className="form-control-lg">
              <div>
                Tip Amount: $<span id="tip">{output.tip}</span>
              </div>
              <div>
                Total pay: $<span id="total">{output.totalBill}</span>
              </div>
              <div>
                Pay per person: $<span id="each">{output.eachBill}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
