'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useTodoStore } from "@/store/todo"

// import { schemaTask } from '@/utils/validations'
const schemaTask = z.object({
  task: z.string().nonempty('A tarefa não pode ser vazia')
})

export function Todo() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { task: '' },
    resolver: zodResolver(schemaTask)
  })

  // console.log(errors)

  const { addTask } = useTodoStore(state => ({
    addTask: state.actions.addTask
  }))

  function handleAddTodo({ task }: { task: string }) {
    addTask({ description: task })
  }

  return (
    <form className="w-screen p-10 flex gap-4" onSubmit={handleSubmit(handleAddTodo)}>
      <input
        type="text"
        placeholder="adicione uma tarefa a lista"
        autoComplete='off'
        className="w-full max-w-lg p-2 border-2 border-gray-300 placeholder:text-purple-500 outline-none ring-1 focus:ring focus:ring-purple-300 text-purple-800"
        {...register('task')}
      />

      <button
        type="submit"
        className="p-2 bg-purple-700 rounded-lg text-white hover:opacity-75"
      >
        Adicionar
      </button>
    </form >
  )
}