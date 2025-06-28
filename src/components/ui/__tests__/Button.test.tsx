import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary-600');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary-600');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary-600');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border-primary-600');

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-secondary-600');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-3 py-1.5');

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-4 py-2');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('px-6 py-3');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:bg-primary-300');
    expect(screen.getByRole('button')).toHaveTextContent('Loading');
  });

  it('is disabled when loading', () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('renders with icon and text', () => {
    render(
      <Button>
        <span data-testid="icon">🚀</span>
        Launch
      </Button>
    );
    
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Launch');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Ref Test</Button>);
    expect(ref).toHaveBeenCalled();
  });

  it('handles keyboard events', () => {
    const handleKeyDown = vi.fn();
    render(<Button onKeyDown={handleKeyDown}>Keyboard</Button>);
    
    fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  it('has correct accessibility attributes', () => {
    render(<Button aria-label="Submit form">Submit</Button>);
    const button = screen.getByRole('button', { name: /submit form/i });
    expect(button).toBeInTheDocument();
  });
}); 