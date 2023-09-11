import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("data fetched");
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    console.log(`Selected value: ${newValue}`);
  };
  return (
    <>
      <div className="bg-blue-500 h-screen md:p-5 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:font-bold md:text-5xl">
          MADRASA NAME, BANGLORE
        </h1>
        <h3 className="text-2xl md:font-bold md:text-3xl mb-10">TIME TABLE</h3>
        <select
          value={selectedValue}
          onChange={handleSelectChange}
          className="w-1/2 md:w-1/4 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus-border-gray-500"
        >
          <option value={""} disabled>
            Select your class
          </option>
          <option value={"class1"}>class 1</option>
          <option value={"class2"}>class 2</option>
          <option value={"class3"}>class 3</option>
        </select>
      </div>
    </>
  );
}

export default App;
