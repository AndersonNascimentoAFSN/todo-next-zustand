'use client'

import { TodoItem } from './TodoItem'

import { useTodoStore } from '@/store/todo'


export default function TodoTable() {
  const { todo } = useTodoStore(state => ({
    todo: state.state.todo
  }))

  return (
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
  )
}
