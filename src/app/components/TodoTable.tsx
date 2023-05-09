'use client'

import { TodoItem } from './TodoItem'

import { useTodoStore } from '@/store/todo'


export default function TodoTable() {
  const { todo, todoHasError } = useTodoStore(state => ({
    todo: state.state.todo,
    todoHasError: state.state.todoHasError,
  }))

  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo?.map((item) => (
            <TodoItem item={item} key={item.id} />
          ))}
        </tbody>
      </table>

      {todoHasError && (
        <div>
          <span>{todoHasError.message}</span>
          <span>{todoHasError.code}</span>
        </div>
      )}
    </>
  )
}
