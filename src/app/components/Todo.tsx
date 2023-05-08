'use client'

import { useCreateTodo } from "@/hooks/useCreateTodo"
import { useState } from "react"

export function Todo() {
  const [task, setTask] = useState<string>('')

  function handleAddTodo() {
    setTask('')
  }

  return (
    <div className="w-screen p-10 flex gap-4">
      <input
        type="text"
        placeholder="adicione uma tarefa a lista"
        className="w-full max-w-lg p-2 border-2 border-gray-300 placeholder:text-purple-500 outline-none ring-1 focus:ring focus:ring-purple-300 text-purple-800"
        onChange={(event) => setTask(event.target.value)} value={task}
      />

      <button
        className="p-2 bg-purple-700 rounded-lg text-white hover:opacity-75"
        onClick={handleAddTodo}>
        Adicionar
      </button>
    </div >
  )
}