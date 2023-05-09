'use client'

import { useTodoStore } from "@/store/todo"

import { Task } from "@/types/task"


type TodoItemProps = {
  item: Task
}

export function TodoItem({ item }: TodoItemProps) {
  const { removeTask, markCompleteTask } = useTodoStore(state => ({
    removeTask: state.actions.removeTask,
    markCompleteTask: state.actions.markCompleteTask,
  }))

  function handleRemove() {
    if (item?.id) {
      removeTask(item.id)
    }
  }

  function handleChecked() {
    if (item.id) {
      markCompleteTask({ id: item.id, isCompleted: !item.isCompleted })
    }
  }

  return (
    <>
      <tr>
        <td className="text-center">{item?.id}</td>
        <td className="text-center">{item.description}</td>
        <td className="text-center">
          <input type="checkbox" className="p-8 cursor-pointer w-5 h-5" checked={item.isCompleted} onChange={handleChecked} />
        </td>
        <td className="text-center">
          <button
            onClick={handleRemove}
            className="p-2 bg-purple-700 rounded-lg text-white hover:opacity-75">
            Delete
          </button>
        </td>
      </tr>
    </>
  )
}
