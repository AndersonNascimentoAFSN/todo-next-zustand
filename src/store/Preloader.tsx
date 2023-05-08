"use client";

import { useRef } from "react";

import { Task } from "../types/task";

import { useTodoStore } from "@/store/todo";

function Preloader({ todo }: { todo: Task[] }) {
  const loaded = useRef(false);

  if (!loaded.current) {
    useTodoStore.setState({ state: { todo: todo } })

    loaded.current = true;
  }

  return null;
}

export default Preloader;
