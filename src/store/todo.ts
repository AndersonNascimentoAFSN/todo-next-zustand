import { create } from 'zustand'


// import produce, { setAutoFreeze } from 'immer'

import { Task } from "@/types/task";
import { TodoService } from '@/services/http/todo';


type TodoStore = {
  state: {
    todo: Task[]
    todoHasError: { message: string, code: number } | null
  },

  getValues: {
    getTotalTodo: () => number
    getTotalTodoIsCompleted: () => number
    getTodoStatus: () => {
      total: number
      isCompleted: number
      notCompleted: number
    }
  },

  actions: {
    addTask: (task: { description: string }) => void
    removeTask: (id: string) => void
    markCompleteTask: ({ id, isCompleted }: { id: string, isCompleted: boolean }) => void
  }
}

const createTodoStore = () =>
  create<TodoStore>((set, get) => ({
    state: {
      todo: [],
      todoHasError: null,
    },

    getValues: {
      getTotalTodo: () => get().state.todo.length,
      getTotalTodoIsCompleted: () => get().state.todo.filter((item) => item.isCompleted).length,
      getTodoStatus: () => ({
        total: get().state.todo.length,
        isCompleted: get().state.todo.filter((item) => item.isCompleted).length,
        notCompleted: get().state.todo.length - get().state.todo.filter((item) => item.isCompleted).length,
      })
    },

    actions: {
      addTask: async (task: { description: string }) => {
        const taskCreated = await TodoService.createTodo({
          todo: { description: task.description, isCompleted: false }
        })

        set(({ state }: TodoStore) =>
        ({
          state: {
            ...state,
            todo: [
              ...state.todo, {
                id: taskCreated.id,
                description: taskCreated.description,
                isCompleted: taskCreated.isCompleted,
              }
            ],
          }
        }))
      },

      removeTask: async (id: string) => {
        await TodoService.removeTodo({
          id
        })

        set(({ state }: TodoStore) => ({
          state:
            { ...state, todo: state.todo.filter((item) => item.id !== id), }
        }))
      },

      markCompleteTask: async ({ id, isCompleted }: { id: string, isCompleted: boolean }) => {
        await TodoService.completeTodo({
          id,
          isCompleted
        })

        set(({ state }: TodoStore) => ({
          state:
          {
            ...state, todo: state.todo.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  isCompleted
                }
              } else return item
            }),
          }
        }))
      },
    }
  }))

export const useTodoStore = createTodoStore()