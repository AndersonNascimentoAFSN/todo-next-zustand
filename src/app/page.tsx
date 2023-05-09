import { Suspense } from "react";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { TodoList } from "./components/TodoList";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <Todo />

        {/* @ts-expect-error Server Component */}
        <TodoList />
      </Suspense>
    </main>
  )
}
