"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/lib/features/counterSlice";
import { Plus, Minus, RefreshCw } from "lucide-react";

// Type definitions
interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

// Sample API function for TanStack Query demo
const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function DemoComponents() {
  const [incrementAmount, setIncrementAmount] = useState<string>("2");
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // TanStack Query example
  const {
    data: todos,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const handleIncrementByAmount = () => {
    const amount = parseInt(incrementAmount, 10) || 0;
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">
          Next.js + Redux + TanStack Query + Shadcn UI Demo
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Redux Counter Demo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Redux Counter</CardTitle>
              <CardDescription>
                Demonstrating Redux Toolkit state management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-4xl font-bold">{count}</span>
              </div>
              <div className="flex gap-2 justify-center">
                <Button onClick={() => dispatch(decrement())} variant="outline">
                  <Minus className="h-4 w-4" />
                </Button>
                <Button onClick={() => dispatch(increment())}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="increment-amount">Increment by amount:</Label>
                <div className="flex gap-2">
                  <Input
                    id="increment-amount"
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                  <Button onClick={handleIncrementByAmount} variant="secondary">
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* TanStack Query Demo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>TanStack Query</CardTitle>
              <CardDescription>
                Fetching data with caching and background updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Sample Todos</h3>
                <Button onClick={() => refetch()} variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>

              {isLoading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="flex justify-center"
                >
                  <RefreshCw className="h-6 w-6" />
                </motion.div>
              )}

              {error && <p className="text-red-500">Error loading todos</p>}

              {todos && (
                <div className="space-y-2">
                  {todos.map((todo: Todo) => (
                    <motion.div
                      key={todo.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 bg-muted rounded text-sm"
                    >
                      <span className={todo.completed ? "line-through" : ""}>
                        {todo.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Animated Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Included Technologies</CardTitle>
            <CardDescription>
              This project includes the following modern web technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Next.js 15",
                "TypeScript",
                "Redux Toolkit",
                "TanStack Query",
                "Shadcn UI",
                "Tailwind CSS",
                "Framer Motion",
                "Lucide Icons",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="p-3 bg-primary/10 rounded-lg text-center font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
