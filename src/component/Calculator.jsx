import { useState } from "react";
import phone from "../assets/phone.png";
import person from "../assets/person.png";

const Calculator = () => {

  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  const [finalAnswer, setFinalAnswer] = useState("");

  // Back Button
  const backButton = () => {

    const updated = data.slice(0, -1);

    setData(updated);

    if (
      updated.includes("+") ||
      updated.includes("-") ||
      updated.includes("*") ||
      updated.includes("/") ||
      updated.includes("%")
    ) {

      try {

        // eslint-disable-next-line
        setResult(eval(updated).toString());

      } catch {

        setResult("");
      }

    } else {

      setResult("");
    }
  };

  // Get Button Value
  const getValue = (e) => {

    const value = e.target.value;

    // Equal ke baad new calculation
    if (finalAnswer !== "") {

      if (["+", "-", "*", "/", "%"].includes(value)) {

        const newData = finalAnswer + value;

        setData(newData);
        setFinalAnswer("");

      } else {

        setData(value);
        setFinalAnswer("");
        setResult("");
      }

      return;
    }

    const updated = data + value;

    setData(updated);

    // Sirf calculation hone par result show
    if (
      updated.includes("+") ||
      updated.includes("-") ||
      updated.includes("*") ||
      updated.includes("/") ||
      updated.includes("%")
    ) {

      try {

        // eslint-disable-next-line
        setResult(eval(updated).toString());

      } catch {

        setResult("");
      }

    } else {

      setResult("");
    }
  };

  // Equal Button
  const calculationValue = () => {

  if (result !== "") {

    setData(result);        // input me total aa jayega
    setFinalAnswer("");     // niche wala hide
    setResult("");          // live result clear
  }
};

  return (
    <div className="flex justify-center items-center">

      <div className="bg-black pb-30 p-5">

        {/* Navbar */}
        <div className="px-3 flex justify-between items-center bg-white h-12 rounded-full">

          <img className="items-center w-8" src={phone} alt="" />

          <h1 className="text-xl font-semibold">
            Calculate your problem
          </h1>

          <img className="w-3" src={person} alt="" />
        </div>

        {/* Input */}
        <input
          type="text"
          value={data}
          placeholder="00"
          readOnly
          className="w-full h-16 mt-40 text-gray-400 text-right text-3xl mb-2 border-none outline-none bg-black"
        />

        {/* Big Result */}
        <h1 className="text-white text-right text-6xl mb-5">

          {finalAnswer !== "" ? finalAnswer : result}

        </h1>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">

          <button
            value="%"
            onClick={getValue}
            className="bg-gray-800 text-white p-4 rounded-xl text-xl"
          >
            %
          </button>

          <button
            value="/"
            onClick={getValue}
            className="bg-gray-800 text-white p-4 rounded-xl text-xl"
          >
            /
          </button>

          <button
            onClick={backButton}
            className="bg-red-500 text-white p-4 rounded-xl text-xl"
          >
            back
          </button>

          <button
            onClick={() => {
              setData("");
              setResult("");
              setFinalAnswer("");
            }}
            className="bg-yellow-600 text-white p-4 rounded-xl text-xl"
          >
            AC
          </button>
        </div>

        {/* 2nd Row */}
        <div className="grid mt-3 grid-cols-4 gap-3">

          <button
            value="7"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            7
          </button>

          <button
            value="8"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            8
          </button>

          <button
            value="9"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            9
          </button>

          <button
            value="*"
            onClick={getValue}
            className="bg-yellow-600 text-white p-4 rounded-xl text-xl"
          >
            X
          </button>
        </div>

        {/* 3rd Row */}
        <div className="grid mt-3 grid-cols-4 gap-3">

          <button
            value="4"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            4
          </button>

          <button
            value="5"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            5
          </button>

          <button
            value="6"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            6
          </button>

          <button
            value="-"
            onClick={getValue}
            className="bg-yellow-600 text-white p-4 rounded-xl text-xl"
          >
            -
          </button>
        </div>

        {/* 4th Row */}
        <div className="grid mt-3 grid-cols-4 gap-3">

          <button
            value="1"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            1
          </button>

          <button
            value="2"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            2
          </button>

          <button
            value="3"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            3
          </button>

          <button
            value="+"
            onClick={getValue}
            className="bg-yellow-600 text-white p-4 rounded-xl text-xl"
          >
            +
          </button>
        </div>

        {/* 5th Row */}
        <div className="grid mt-3 grid-cols-4 gap-3">

          <button
            value="/"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            /
          </button>

          <button
            value="0"
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            0
          </button>

          <button
            value="."
            onClick={getValue}
            className="bg-gray-700 text-white p-4 rounded-xl text-xl"
          >
            .
          </button>

          <button
            onClick={calculationValue}
            className="bg-green-500 text-white p-4 rounded-xl text-xl"
          >
            =
          </button>
        </div>

      </div>
    </div>
  );
};

export default Calculator;