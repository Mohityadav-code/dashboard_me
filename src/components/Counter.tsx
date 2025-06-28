import { useState } from 'react'

interface CounterProps {
  initialValue?: number
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <button onClick={increment} data-testid="increment-btn">
        Increment
      </button>
      <button onClick={decrement} data-testid="decrement-btn">
        Decrement
      </button>
    </div>
  )
} 