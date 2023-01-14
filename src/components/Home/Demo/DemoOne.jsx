import React from "react";

const DemoOne = () => {
  return (
    <div>
      <div className="flex mb-4">
      <input type="radio" name="radio-1" className="radio mr-4 radio-primary" checked />
      <label htmlFor="">Income Statement</label>
      </div>
      <div className="flex mb-4">
      <input type="radio" name="radio-1" className="radio mr-4 radio-secondary" checked />
      <label htmlFor="">Balance Sheet</label>
      </div>
      <h1 className="text-2xl mb-4">clothing</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-96"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-96"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-96"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </div>
  );
};

export default DemoOne;
