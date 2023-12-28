import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

async function createNewTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("title is invalid");
  }
  await prisma.todo.create({ data: { title } });
  redirect("/");
}

const About = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1>New Todo </h1>
      </header>
      <form className="flex gap-2 flex-col" action={createNewTodo}>
        <input
          type="text"
          name="title"
          className="border border-slate-300 text-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex justify-end gap-2">
          <Link href=".." className="button">
            Cancel
          </Link>
          <button type="submit" className="button">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default About;
