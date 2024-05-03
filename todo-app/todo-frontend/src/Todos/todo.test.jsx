import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from './Todo.jsx';

describe('Todo', () => {
  it('renders the Todo component correctly', () => {
    const todo = {
      text: 'Test',
      complete: false
    }
    const onClickDelete = vi.mock
    const onClickComplete = vi.mock
    
    render(<Todo todo={todo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />)

    expect(screen.queryAllByText('This todo is done').length).toBe(0)
    expect(screen.queryAllByText('Test').length).toBe(1)
    expect(screen.queryAllByText('This todo is not done').length).toBe(1)
  })
})




