import React, { useState } from "react";

// function calculate(value) {
//   return;
// }
// //1+1

function compute(value, setData) {
  console.log(value);
  try {
    return eval(`${value}`);
  } catch (err) {
    console.log("error", err);
    setData("0");
  }
}

export function Calculator() {
  const [data, setData] = useState("");

  return (
    <div id="container">
      <div id="display">{data}</div>
      <div className="button-container">
        <button
          className="big-block"
          id="clear"
          onClick={() => {
            setData("0");
          }}
        >
          AC
        </button>
        <button
          className="small-block"
          id="divide"
          onClick={() => {
            console.log(typeof data);
            if (!data) {
              return;
            }

            console.log((11, data));
            let isEndwithOperater =
              data.endsWith("+") || data.endsWith("*") || data.endsWith("/");

            // let last_element = my_array[my_array.length - 1];

            if (data === "0") {
              setData("/");
            } else if (!isEndwithOperater) {
              setData(data + "/");
            }
          }}
        >
          /
        </button>
        <button
          className="small-block"
          id="multiply"
          onClick={() => {
            if (!data) {
              return;
            }

            let isEndwithOperater =
              data.endsWith("+") || data.endsWith("*") || data.endsWith("/");

            if (data === "0") {
              setData("*");
            } else if (!isEndwithOperater) {
              setData(data + "*");
            }
          }}
        >
          x
        </button>
        <button
          className="small-block"
          id="seven"
          onClick={() => {
            if (data === "0") {
              setData("7");
            } else setData(data + "7");
          }}
        >
          7
        </button>
        <button
          className="small-block"
          id="eight"
          onClick={() => {
            // 0,=> 8
            // 1 => 18
            if (data === "0") {
              setData("8");
            } else setData(data + "8");
          }}
        >
          8
        </button>
        <button
          className="small-block"
          id="nine"
          onClick={() => {
            if (data === "0") {
              setData("9");
            } else setData(data + "9");
          }}
        >
          9
        </button>
        <button
          className="small-block"
          id="subtract"
          onClick={() => {
            if (data === "0") {
              setData("-");
            } else {
              setData(data + "-");
            }
          }}
        >
          -
        </button>
        <button
          className="small-block"
          id="four"
          onClick={() => {
            if (data === "0") {
              setData("4");
            } else {
              setData(data + "4");
            }
          }}
        >
          4
        </button>
        <button
          className="small-block"
          id="five"
          onClick={() => {
            if (data === "0") {
              setData("5");
            } else {
              setData(data + "5");
            }
          }}
        >
          5
        </button>
        <button
          className="small-block"
          id="six"
          onClick={() => {
            if (data === "0") {
              setData("6");
            } else {
              setData(data + "6");
            }
          }}
        >
          6
        </button>
        <button
          className="small-block"
          id="add"
          onClick={() => {
            let isEndwithOperater =
              data.endsWith("+") || data.endsWith("*") || data.endsWith("/");

            if (data === "0") {
              setData("+");
            } else if (!isEndwithOperater) {
              setData(data + "+");
            }
          }}
        >
          +
        </button>

        <div className="parent">
          <button
            className="small-block"
            id="one"
            onClick={() => {
              if (data === "0") {
                setData("1");
              } else {
                setData(data + "1");
              }
            }}
          >
            1
          </button>
          <button
            className="small-block"
            id="two"
            onClick={() => {
              if (data === "0") {
                setData("2");
              } else {
                setData(data + "2");
              }
            }}
          >
            2
          </button>
          <button
            className="small-block"
            id="three"
            onClick={() => {
              if (data === "0") {
                setData("3");
              } else {
                setData(data + "3");
              }
            }}
          >
            3
          </button>
          <button
            className="v-block"
            id="equals"
            onClick={() => {
              const result = compute(data, setData);
              setData(result);
            }}
          >
            =
          </button>
          <div className="children">
            <button
              className="big-block"
              id="zero"
              onClick={() => {
                if (data === "0") {
                  setData("0");
                } else {
                  setData(data + "0");
                }
              }}
            >
              0
            </button>
            <button
              className="small-block"
              id="zero"
              onClick={() => {
                if (data === "0") {
                  setData("0");
                } else {
                  setData(data + "00");
                }
              }}
            >
              00
            </button>
            <button
              className="small-block"
              id="decimal"
              // if . don't do anything
              // if no . insert once.
              onClick={() => {
                let hasOperater =
                  data.includes("+") ||
                  data.includes("-") ||
                  data.includes("*") ||
                  data.includes("/");

                console.log(data);
                if (data === "0") {
                  setData(".");
                } else if (!data.endsWith(".")) {
                  console.log(hasOperater);
                  if (hasOperater || !data.includes(".")) {
                    setData(data + ".");
                  }
                }
              }}
            >
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
