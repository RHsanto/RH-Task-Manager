import React from "react";
import { useState } from "react";
import DemoOne from "./DemoOne";
import DemoTwo from "./DemoTwo";

const Demo = () => {
  const [demoOne,setDemoOne]=useState(<DemoOne/>)
  const [demoTwo,setDemoTwo]=useState(<DemoTwo/>)
  const handleOne=()=>{
setDemoOne(<DemoOne/>)
  }
  const handleTwo=()=>{
setDemoOne(<DemoTwo/>)
  }


  return (
    <div className="container mx-auto p-12">
      <div className="flex justify-center">
        <div className="border p-10 bg-stone-200">
          <div className="dropdown mb-16">
            <label tabIndex={0} className="btn m-1">
              Click
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li >
                <a onClick={handleOne}>Clothings</a>
              </li>
              <li>
                <a onClick={handleTwo}>Gaming</a>
              </li>
            </ul>
          </div>{" "}
         {demoOne}
        </div>
      </div>
    </div>
  );
};

export default Demo;
