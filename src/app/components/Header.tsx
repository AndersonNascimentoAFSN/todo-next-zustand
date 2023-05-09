'use client'

import { useTodoStore } from "@/store/todo";

export function Header() {
  // const { getTotalTodo, /* getTotalTodoIsCompleted */ } = useTodoStore(state => ({
  //   getTotalTodo: state.getValues.getTotalTodo,
  //   // getTotalTodoIsCompleted: state.getValues.getTotalTodoIsCompleted,
  // }))

  // const totalTodo = getTotalTodo()

  // const totalTodoIsCompleted = getTotalTodoIsCompleted()

  return (
    <header className="w-screen bg-fuchsia-800 p-10">
      <h1 className="m-auto text-white text-3xl">Lista de Tarefas</h1>
      <h3 className="m-auto text-white text-xl">Organize suas tarefas de forma simples e prática</h3>

      <div className="flex flex-col">
        {/* <span className="text-white mr-3">Quantidade de tarefas: {totalTodo}</span> */}
        {/* <span className="text-white mr-3">Quantidade de tarefas completas: {totalTodoIsCompleted}</span> */}
        {/* <span className="text-white mr-3">Quantidade de tarefas não completas: {totalTodo - totalTodoIsCompleted}</span> */}
      </div>
    </header>
  )
}
