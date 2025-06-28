import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders with initial value of 0', () => {
    render(<Counter />)
    expect(screen.getByText('Counter: 0')).toBeInTheDocument()
  })

  it('renders with custom initial value', () => {
    render(<Counter initialValue={5} />)
    expect(screen.getByText('Counter: 5')).toBeInTheDocument()
  })

  it('increments counter when increment button is clicked', () => {
    render(<Counter />)
    const incrementButton = screen.getByTestId('increment-btn')
    
    fireEvent.click(incrementButton)
    expect(screen.getByText('Counter: 1')).toBeInTheDocument()
  })

  it('decrements counter when decrement button is clicked', () => {
    render(<Counter initialValue={5} />)
    const decrementButton = screen.getByTestId('decrement-btn')
    
    fireEvent.click(decrementButton)
    expect(screen.getByText('Counter: 4')).toBeInTheDocument()
  })

  it('has increment and decrement buttons', () => {
    render(<Counter />)
    expect(screen.getByTestId('increment-btn')).toBeInTheDocument()
    expect(screen.getByTestId('decrement-btn')).toBeInTheDocument()
  })
}) 