import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const numbers = [1, 2, 3];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  var buttonStyle = { backgroundColor: "#7950f2", color: "#fff" };

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  function handleIsOpen() {
    setIsOpen((is) => !is);
  }

  return (
    <div>
      <button className="close" onClick={handleIsOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* <Number number={numbers[0]} step={step >= 1 ? "active" : ""}/>
      <Number number={numbers[1]} step={step >= 2 ? "active" : ""}/>
      <Number number={numbers[2]} step={step >= 3 ? "active" : ""}/> */}
            {numbers.map((number) =>
              number <= step ? (
                <Number step="active" key={number}>
                  {number}
                </Number>
              ) : (
                <Number step="" key={number}>
                  {number}
                </Number>
              )
            )}
          </div>
          <Message>
            Step {step}: {messages[step - 1]}
          </Message>

          <div className="buttons">
            <Button buttonStyle={buttonStyle} handleClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button buttonStyle={buttonStyle} handleClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ buttonStyle, handleClick, children }) {
  return (
    <button style={buttonStyle} onClick={handleClick}>
      {children}
    </button>
  );
}

function Number({ children, step }) {
  return <div className={step}>{children}</div>;
}

function Message({ children }) {
  return <p className="message">{children}</p>;
}
