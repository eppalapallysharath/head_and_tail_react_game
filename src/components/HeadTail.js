import React, { useRef, useState } from "react";

function HeadTail() {
  const [selectedOption, setSelectedOption] = useState("");
  // const [col, setCol] = useState(false);

  const [data, setData] = useState({
    data: [],
  });
  // console.log(data.data);
  const prevSelecteOption = useRef("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleClick = (e) => {
    // console.log(selectedOption, "selectedOption");

    if (selectedOption === " ") alert("Please Select a Value");
    // console.log(data.length);
    // console.log(data);
    if (
      selectedOption !== prevSelecteOption.current &&
      selectedOption !== "Select Value"
    ) {
      let diffData = {
        ...data,
        data: [...data.data, [selectedOption]],
      };
      setData(diffData);
      // console.log(data, "diffdata");
      setSelectedOption("Select Value");
    } else {
      if (selectedOption !== "Select Value") {
        let prevIndexArray = data.data.slice();
        // console.log(prevIndexArray);
        // console.log(prevIndexArray.length);
        const length = prevIndexArray.length - 1;
        prevIndexArray[length].push(selectedOption);
        let sameData = {
          ...data,
          data: prevIndexArray,
        };
        setData(sameData);
        // console.log(data, "samedata");
        setSelectedOption("Select Value");
      }
    }
    prevSelecteOption.current = selectedOption;
    // console.log(prevSelecteOption.current);
  };

  // console.log(data, "all elements");

  const handleClickDelete = (col, index, item) => {
    // var td = e.target;
    // console.log(td, "td");
    // console.log(e);
    // td.remove();

    //  console.log(index, "index value");
    //  console.log(data);
    //  console.log(data.data);
    // console.log(data.data[col][index], "delete node");
    // console.log(`data.data${col} ${index}`);
    data.data[col].splice(index, 1);
    // console.log(arr, "splice array");
    // console.log(data.data, "after splice");

    let temp = {
      ...data,
      data: data.data,
    };
    setData(temp);
    // console.log(data, "after delete");
  };

  return (
    <div className="container">
      <div>
        <h1>Head & Tail</h1>
      </div>
      <div>
        <select
          id="ht"
          className="form-select"
          value={selectedOption}
          onChange={handleChange}
          required
        >
          <option value=" " hidden>
            Select Value
          </option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        <button
          type="submit"
          className="btn btn-primary mt-5"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
      {/* {selectedOption} */}
      {/* <div id="div1" style={{ display: col ? "flex" : "no" }}></div> */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {data.data.length > 0 &&
          data.data.map((arr, col) => {
            // console.log(arr);
            return (
              <div>
                {arr.length > 0 &&
                  arr.map((item, index) => {
                    // console.log(item, "value");
                    // console.log(index, "index");
                    return (
                      <table id="table" key={index}>
                        {/* <tbody> */}
                        {/* <td className="m-2 p-2"> */}
                        <button
                          id="torh"
                          className="btn btn-primary m-2"
                          onClick={() => handleClickDelete(col, index, item)}
                        >
                          {item}
                        </button>
                        {/* </td> */}
                        {/* </tbody> */}
                      </table>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HeadTail;
