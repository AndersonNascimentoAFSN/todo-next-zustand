import { create } from 'zustand'


// import produce, { setAutoFreeze } from 'immer'

import { Task } from "@/types/task";
import { TodoService } from '@/services/http/todo';


type TodoStore = {
  state: {
    todo: Task[]
  },

  getValues: {
    getTotalTodo: () => number
  },

  actions: {
    addTask: (task: { description: string }) => void
    removeTask: (id: string) => void
  }
}

interface InitialStateTodoStore {
  todo: Task[]
}

export const initialState: InitialStateTodoStore = {
  todo: [
    { id: '', description: '' }
  ],
}

const createTodoStore = () =>
  create<TodoStore>((set, get) => ({
    state: {
      todo: [],
    },

    getValues: {
      getTotalTodo: () => get().state.todo.length,
    },

    actions: {
      addTask: async (task: { description: string }) => {
        const taskCreated = await TodoService.createTodo({
          todo: { description: task.description, isCompleted: false }
        })

        set(({ state }: TodoStore) =>
        ({
          state: {
            todo: [
              ...state.todo, {
                description: taskCreated.description,
                isCompleted: taskCreated.isCompleted,
                id: taskCreated.id
              }
            ]
          }
        }))
      },

      removeTask: (id: string) => set(({ state }: TodoStore) => ({
        state:
          { todo: state.todo.filter((item) => item.id !== id) }
      })),

      setInitialState() {
        set((state: TodoStore) => ({
          ...state,
          ...initialState
        }))
      }
    }
  }))

export const useTodoStore = createTodoStore()