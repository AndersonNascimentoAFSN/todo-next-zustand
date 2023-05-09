import { useTodoList } from "@/hooks/useTodoList"

import Preloader from "@/store/Preloader"
import TodoTable from "./TodoTable"

export async function TodoList() {
  // await Promise.resolve(setTimeout(() => 5000))

  const todo = await useTodoList()

  return (
    <div className="w-screen flex items-center justify-center">
      <Preloader todo={todo?.data} todoHasError={todo?.hasError} />

      <TodoTable />
    </div>
  )
}