import React from 'react';

const DemoFive = () => {
  return (
    <div>
    <h1 className="text-2xl mb-4">Balance Sheet</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-96"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-96"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-96"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-96"
        />
      </div>
      <button className="btn btn-warning">Submit Balance Sheet</button>
    </div>
  );
};

export default DemoFive;