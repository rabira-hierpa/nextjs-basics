import { TodoItem } from "@/components/todo-item";
import { prisma } from "@/db";
import Link from "next/link";

async function getTodos() {
  return await prisma.todo.findMany();
}
const toggleComplete = async (id: string, complete: boolean) => {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
};

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1>Todo app</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New Todo
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </>
  );
}
