import React from "react";

function priorityGuide() {
  // TODO: add custom color tags

  const tags = [
    { name: "none", color: "bg-none" },
    { name: "easy", color: "bg-basic" },
    { name: "medium", color: "bg-medium" },
    { name: "hard", color: "bg-hard" },
  ];

  const Tag = (props) => {
    const { item } = props;
    var bgClass = item.color;

    return (
      <>
        <li className={bgClass}>
          <span className="text-base text-silver capitalize">{item.name}</span>
        </li>
      </>
    );
  };

  return (
    <div className="w-full my-3">
      <ul className="w-auto flex justify-evenly items-center">
        {tags.map((el, i) => {
          return <Tag key={i} item={el} />;
        })}
      </ul>
    </div>
  );
}

export default priorityGuide;
