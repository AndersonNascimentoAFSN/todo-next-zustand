import { TodoService } from "../services/http/todo";

export function useTodoList() {
  return  TodoService.getTodoList()
}