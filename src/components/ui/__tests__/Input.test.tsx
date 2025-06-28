import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input Component', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveAttribute('type', 'email');
  });

  it('renders with label', () => {
    render(<Input label="Username" placeholder="Enter username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('renders with different types', () => {
    const { rerender } = render(<Input type="email" placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');

    rerender(<Input type="password" placeholder="Password" />);
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password');

    rerender(<Input type="number" placeholder="Number" />);
    expect(screen.getByPlaceholderText('Number')).toHaveAttribute('type', 'number');
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} placeholder="Test input" />);
    
    const input = screen.getByPlaceholderText('Test input');
    fireEvent.change(input, { target: { value: 'test value' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({ value: 'test value' })
    }));
  });

  it('renders with icon', () => {
    render(<Input icon={<span data-testid="search-icon">🔍</span>} placeholder="Search" />);
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Input className="custom-input" placeholder="Custom" />);
    expect(screen.getByPlaceholderText('Custom')).toHaveClass('custom-input');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} placeholder="Ref test" />);
    expect(ref).toHaveBeenCalled();
  });

  it('handles focus and blur events', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    
    render(
      <Input 
        onFocus={handleFocus} 
        onBlur={handleBlur} 
        placeholder="Focus test" 
      />
    );
    
    const input = screen.getByPlaceholderText('Focus test');
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('handles keyboard events', () => {
    const handleKeyDown = vi.fn();
    render(<Input onKeyDown={handleKeyDown} placeholder="Keyboard test" />);
    
    const input = screen.getByPlaceholderText('Keyboard test');
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled placeholder="Disabled input" />);
    expect(screen.getByPlaceholderText('Disabled input')).toBeDisabled();
  });

  it('has correct accessibility attributes', () => {
    render(
      <Input 
        label="Username" 
        placeholder="Enter username" 
        aria-describedby="username-help"
      />
    );
    
    const input = screen.getByPlaceholderText('Enter username');
    expect(input).toHaveAttribute('aria-describedby', 'username-help');
  });

  it('renders with error state', () => {
    render(<Input error="This field is required" placeholder="Error input" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.getByText('This field is required')).toHaveClass('text-red-600');
  });

  it('handles controlled input', () => {
    render(<Input value="controlled value" placeholder="Controlled" />);
    const input = screen.getByPlaceholderText('Controlled');
    expect(input).toHaveValue('controlled value');
  });
}); 