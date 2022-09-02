import React from "react";

function CardComponent(props) {
  return (
    <div
      style={props.style}
      className="card  bg-cover bg-no-repeat bg-center relative overflow-hidden h-96  m-4 rounded-2xl max-w-xs w-full bg-slate-300"
    >
      <div className="card-body bg-black/75 absolute box-border w-full duration-1000 bottom-0 h-8">
        <div className="card-content p-2 md:p-4">
          <h2 className="card-title text-white text-xl mt-10">{props.title}</h2>
          <p className="card-text text-white mb-10 ">{props.description}</p>

          <a href={props.url} className={props.classNameButton}>
            {props.linkText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
