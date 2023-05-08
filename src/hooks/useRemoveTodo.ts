import { TodoService } from "../services/http/todo";

type RemoveTodo = {
  id: string;
}

export function useRemoveTodo({ id }: RemoveTodo) {
  return TodoService.removeTodo({ id })
}