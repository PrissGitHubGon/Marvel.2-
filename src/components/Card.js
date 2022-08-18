import React from "react";

function Card() {
  return (
    <div class="card bg-[url('https://unsplash.it/500/700')] bg-cover bg-no-repeat bg-center relative overflow-hidden h-96  m-4 rounded-2xl max-w-xs w-full bg-slate-300">
      <div class="card-body bg-black/75 absolute box-border w-full duration-1000 bottom-0 h-8">
        <div class="card-content p-8">
          <h2 class="card-title">Nice animated card</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            tempora at rerum?
          </p>

          <button className="bg-slate-300 text-teal-800 border-0 rounded-md p-2">
            Learn more{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
