import React from "react";

const Home = () => {
  return (
    <div className="main_section">
      <header className="shadow-2xl p-4 ">
        <h1 className="text-3xl text-center">RH Task Manager </h1>
      </header>
      <div className="md:container md:mx-auto">
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-4 mt-20">
          <div id="todo_card" className="bg-slate-200 h-96">
            <div
              id="todo_head"
              className="bg-indigo-700 rounded
             text-white p-4 flex justify-between items-center"
            >
              <h1>TO DO</h1>
              <button className="text-3xl border rounded-lg px-3">+</button>
            </div>
            <div className=""></div>
          </div>
          <div id="in_process" className="bg-zinc-200		h-96">
            <div
              id="in-process_head"
              className="bg-cyan-400 rounded
             text-white p-4 flex justify-between items-center"
            >
              <h1>IN PROGRESS</h1>
              <button className="text-3xl border rounded-lg px-3">+</button>
            </div>
          </div>
          <div id="review_card" className="bg-slate-200 h-96">
            <div
              id="review_head"
              className="bg-amber-400	 rounded
             text-white p-4 flex justify-between items-center"
            >
              <h1>REVIEW</h1>
              <button className="text-3xl border rounded-lg px-3">+</button>
            </div>
          </div>
          <div id="done-card" className="bg-zinc-200		h-96">
            <div
              id="done-head"
              className="bg-lime-500	 rounded
             text-white p-4 flex justify-between items-center"
            >
              <h1>DONE</h1>
              <button className="text-3xl border rounded-lg px-3">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
