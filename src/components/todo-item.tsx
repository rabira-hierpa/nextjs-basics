"use client";

type TodoItemPros = {
  id: string;
  title: string;
  complete: boolean;
  toggleComplete: (id: string, complete: boolean) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleComplete,
}: Readonly<TodoItemPros>) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleComplete(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
