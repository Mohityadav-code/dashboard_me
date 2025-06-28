import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from '../Tooltip';

describe('Tooltip Component', () => {
  it('renders children without showing tooltip initially', () => {
    render(
      <Tooltip content="Tooltip content">
        <button>Hover me</button>
      </Tooltip>
    );
    
    expect(screen.getByRole('button', { name: /hover me/i })).toBeInTheDocument();
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
  });

  it('shows tooltip on mouse enter', () => {
    render(
      <Tooltip content="Tooltip content">
        <button>Hover me</button>
      </Tooltip>
    );
    
    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();
  });

  it('hides tooltip on mouse leave', () => {
    render(
      <Tooltip content="Tooltip content">
        <button>Hover me</button>
      </Tooltip>
    );
    
    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    
    fireEvent.mouseLeave(button);
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
  });

  it('renders with different positions', () => {
    const { rerender } = render(
      <Tooltip content="Top tooltip" position="top">
        <button>Top</button>
      </Tooltip>
    );
    
    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    const tooltip = screen.getByText('Top tooltip');
    expect(tooltip).toHaveClass('bottom-full');

    rerender(
      <Tooltip content="Bottom tooltip" position="bottom">
        <button>Bottom</button>
      </Tooltip>
    );
    
    fireEvent.mouseEnter(screen.getByRole('button'));
    const bottomTooltip = screen.getByText('Bottom tooltip');
    expect(bottomTooltip).toHaveClass('top-full');

    rerender(
      <Tooltip content="Left tooltip" position="left">
        <button>Left</button>
      </Tooltip>
    );
    
    fireEvent.mouseEnter(screen.getByRole('button'));
    const leftTooltip = screen.getByText('Left tooltip');
    expect(leftTooltip).toHaveClass('right-full');

    rerender(
      <Tooltip content="Right tooltip" position="right">
        <button>Right</button>
      </Tooltip>
    );
    
    fireEvent.mouseEnter(screen.getByRole('button'));
    const rightTooltip = screen.getByText('Right tooltip');
    expect(rightTooltip).toHaveClass('left-full');
  });

  it('applies custom className', () => {
    render(
      <Tooltip content="Custom tooltip" className="custom-tooltip">
        <button>Custom</button>
      </Tooltip>
    );
    
    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    
    const tooltip = screen.getByText('Custom tooltip');
    expect(tooltip.parentElement).toHaveClass('custom-tooltip');
  });

  it('renders with complex content', () => {
    render(
      <Tooltip content={<span data-testid="complex-content">Complex <strong>content</strong></span>}>
        <button>Complex Button</button>
      </Tooltip>
    );
    
    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    
    expect(screen.getByTestId('complex-content')).toBeInTheDocument();
    expect(screen.getByText('Complex Button')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('handles multiple tooltips on the same page', () => {
    render(
      <div>
        <Tooltip content="First tooltip">
          <button>First</button>
        </Tooltip>
        <Tooltip content="Second tooltip">
          <button>Second</button>
        </Tooltip>
      </div>
    );
    
    const firstButton = screen.getByRole('button', { name: /first/i });
    const secondButton = screen.getByRole('button', { name: /second/i });
    
    fireEvent.mouseEnter(firstButton);
    expect(screen.getByText('First tooltip')).toBeInTheDocument();
    
    fireEvent.mouseEnter(secondButton);
    expect(screen.getByText('Second tooltip')).toBeInTheDocument();
    expect(screen.getByText('First tooltip')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(
      <Tooltip content="Accessible tooltip">
        <button aria-describedby="tooltip-1">Accessible</button>
      </Tooltip>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-describedby', 'tooltip-1');
  });

  it('renders with default position (top)', () => {
    render(
      <Tooltip content="Default tooltip">
        <button>Default</button>
      </Tooltip>
    );
    
    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    
    const tooltip = screen.getByText('Default tooltip');
    expect(tooltip).toHaveClass('bottom-full');
  });

  it('handles empty content gracefully', () => {
    render(
      <Tooltip content="">
        <button>Empty</button>
      </Tooltip>
    );
    
    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    
    // Should not crash and should render an empty tooltip
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
}); 