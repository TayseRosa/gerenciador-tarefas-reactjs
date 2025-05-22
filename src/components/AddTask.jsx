import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("123");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-400 space-y-4 p-6 rounded-md shadow flex flex-col">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Digite o titulo da tarefa"
        className="bg-slate-200 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite a descrição da tarefa"
        className="bg-slate-200 border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      ></input>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descrição da tarefa!");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
