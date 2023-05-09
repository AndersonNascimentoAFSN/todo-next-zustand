'use client'

import { useTodoStore } from "@/store/todo";

export function Header() {
  const { getTodoStatus } = useTodoStore(state => ({
    getTodoStatus: state.getValues.getTodoStatus
  }))

  const { total, isCompleted, notCompleted } = getTodoStatus()

  return (
    <header className="w-screen bg-fuchsia-800 p-10">
      <h1 className="m-auto text-white text-3xl">Lista de Tarefas</h1>
      <h3 className="m-auto text-white text-xl">Organize suas tarefas de forma simples e prática</h3>

      <div className="flex flex-col">
        <span className="text-white mr-3">Quantidade de tarefas: {total}</span>
        <span className="text-white mr-3">Quantidade de tarefas completas: {isCompleted}</span>
        <span className="text-white mr-3">Quantidade de tarefas não completas: {notCompleted}</span>
      </div>
    </header>
  )
}
