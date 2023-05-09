"use client";

import { useRef } from "react";

import { Task } from "../types/task";

import { useTodoStore } from "@/store/todo";

import { ErrorAPI } from "@/services/api";

function Preloader({ todo, todoHasError }: { todo: Task[], todoHasError: ErrorAPI | null }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    useTodoStore.setState({ state: { todo: todo, todoHasError: todoHasError } })
    loaded.current = true;
  }

  return null;
}

export default Preloader;
