import React from "react";

function Card(props) {
  const { children = undefined, hover = true } = props;


  if (!children) return;

  return (
    <div className={`w-full h-12 flex items-center rounded-xl border border-gray-100 bg-rich-black-medium px-4 ${ hover ? 'cursor-pointer' : ''}`}>
      {children}
    </div>
  );
}

export default Card;
