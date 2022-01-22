import { useEffect, useState, createRef } from "react";
import React from "react";
import Card from "../components/card";

function Home() {
  // TODO: hacer input para agregar tarea
  // NOTE: fijarse todo list para ver si es correcto un input o no
  // TODO: Hacer Modales :"
  // TODO: Listar items
  // TODO: Rediseñar card
  // TODO: Eliminar componentes inutiles
  // ANCHOR: ideas
  // TODO: Hacer sub tareas de cada item
  // TODO: Mostrar sub tareas y poder check desde la vista principal
  // TODO: Filtrar por etiqueta (Lodash)

  var search = createRef();
  const [tasks, addTask] = useState([]);

  useEffect(() => {
    fetchTask();
  }, []);

  function handleKeys(ev) {
    const { keyCode: key } = ev;
    const { value: text } = search.current;
    const enter = 13;

    if (key === enter && text !== "") {
      createTask(text);
    }
  }

  function createTask(title) {
    // TODO: generate unique id

    let taskSkeleton = {
      title,
      subTask: [],
      tags: [],
      priority: null,
    };

    let savedData = JSON.parse(localStorage["todo-data"]);

    savedData = [...savedData, taskSkeleton];

    localStorage.setItem("todo-data", JSON.stringify(savedData));

    fetchTask();
  }

  function fetchTask() {
    let data = JSON.parse(localStorage["todo-data"]);

    if (!data) localStorage.setItem("todo-data", "[]");
    else addTask(data);

    search.current.blur();
    search.current.value = "";
  }

  return (
    <div className="w-full h-full max-w-lg min-h-screen flex flex-col items-center pt-8 mx-auto gap-y-8">
      <h1 className="text-3xl text-center">Todo list</h1>
      <Card hover={false}>
        <i className="bi bi-plus-lg text-gray-100 mr-2" />
        <input
          type="text"
          className="bg-transparent border-0 w-full text-gray-100"
          placeholder="Add task"
          onKeyDown={handleKeys}
          ref={search}
        />
      </Card>
      <div className="w-full flex flex-col-reverse gap-y-4 items-center mt-4">
        {tasks.map((el, index) => {
          return (
            <>
              <Card key={index}>
                <h4 className="text-white"> {el.title} </h4>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
