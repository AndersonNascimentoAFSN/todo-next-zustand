
import { TodoService } from "../services/http/todo";

type CompleteTodo = {
  isCompleted: boolean;
  id: string;
}

export function useCompleteTodo({isCompleted, id}: CompleteTodo) {

  return  TodoService.completeTodo({ isCompleted, id })
}