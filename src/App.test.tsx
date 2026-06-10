import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the Bill', () => {
    render(<App />)

    expect(screen.getByLabelText('Bill')).toBeInTheDocument()
  })
  it('renders the button 10%', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: '10%' })).toBeInTheDocument()
  })
  it('renders the input number of people', () => {
    render(<App />)

    expect(screen.getByLabelText('Number of People')).toBeInTheDocument()
  })
  it('renders the reset button', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'RESET' })).toBeInTheDocument()
  })
})
