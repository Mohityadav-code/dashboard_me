import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card Component', () => {
  it('renders with default props', () => {
    render(<Card>Card content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('bg-white');
    expect(card).toHaveClass('dark:bg-secondary-800');
  });

  it('renders with custom className', () => {
    render(<Card className="custom-card">Custom card</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-card');
  });

  it('renders with hover effect when hover prop is true', () => {
    render(<Card hover>Hover card</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('hover:shadow-md');
  });

  it('renders without hover effect when hover prop is false', () => {
    render(<Card hover={false}>No hover card</Card>);
    const card = screen.getByTestId('card');
    expect(card).not.toHaveClass('hover:shadow-md');
  });

  it('renders with children content', () => {
    render(
      <Card>
        <h2>Card Title</h2>
        <p>Card description</p>
        <button>Action</button>
      </Card>
    );
    
    expect(screen.getByRole('heading', { name: /card title/i })).toBeInTheDocument();
    expect(screen.getByText('Card description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();
  });

  it('renders with complex nested content', () => {
    render(
      <Card>
        <div data-testid="header">
          <h1>Header</h1>
        </div>
        <div data-testid="body">
          <p>Body content</p>
        </div>
        <div data-testid="footer">
          <span>Footer</span>
        </div>
      </Card>
    );
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('body')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('applies all default styling classes', () => {
    render(<Card>Styled card</Card>);
    const card = screen.getByTestId('card');
    
    expect(card).toHaveClass('bg-white');
    expect(card).toHaveClass('dark:bg-secondary-800');
    expect(card).toHaveClass('rounded-xl');
    expect(card).toHaveClass('shadow-sm');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('border-secondary-200');
    expect(card).toHaveClass('dark:border-secondary-700');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Card ref={ref}>Ref card</Card>);
    expect(ref).toHaveBeenCalled();
  });

  it('handles empty children', () => {
    render(<Card>{null}</Card>);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  it('renders with different content types', () => {
    render(
      <Card>
        <div>Text content</div>
        {null}
        {undefined}
        {false}
        {0}
        {''}
      </Card>
    );
    
    expect(screen.getByText('Text content')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('maintains proper DOM structure', () => {
    render(<Card>Structure test</Card>);
    const card = screen.getByTestId('card');
    
    expect(card).toBeInstanceOf(HTMLElement);
    expect(card.tagName).toBe('DIV');
  });
}); 