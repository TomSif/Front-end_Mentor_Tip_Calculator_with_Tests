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
  it('fill in the inputs and click on a percentage button', async () => {
    // Arrange
    render(<App />)
    const user = userEvent.setup()
    const billInput = screen.getByLabelText('Bill')
    const numberOfPeopleInput = screen.getByLabelText('Number of People')
    const buttonTenPercent = screen.getByRole('button', { name: '10%' })
    // Act
    await user.type(billInput, '100')
    await user.type(numberOfPeopleInput, '2')
    await user.click(buttonTenPercent)
    // Assert
    expect(screen.getByRole('status', { name: 'Total' })).toHaveTextContent(
      '$55.00',
    )
    expect(
      screen.getByRole('status', { name: 'Tip Amount' }),
    ).toHaveTextContent('$5.00')
  })
  it('reset the results by clicking the reset button', async () => {
    // Arrange
    render(<App />)
    const user = userEvent.setup()
    const buttonReset = screen.getByRole('button', { name: 'RESET' })
    // Act
    await user.click(buttonReset)
    // Assert
    expect(screen.getByRole('status', { name: 'Total' })).toHaveTextContent(
      '$0.00',
    )
    expect(
      screen.getByRole('status', { name: 'Tip Amount' }),
    ).toHaveTextContent('$0.00')
  })
  it('see the result when the custom input is filled', async () => {
    // Arrange
    render(<App />)
    const user = userEvent.setup()
    const billInput = screen.getByLabelText('Bill')
    const numberOfPeopleInput = screen.getByLabelText('Number of People')
    const customInput = screen.getByPlaceholderText('Custom')
    // Act
    await user.type(billInput, '100')
    await user.type(numberOfPeopleInput, '2')
    await user.type(customInput, '5')

    // Assert
    expect(screen.getByRole('status', { name: 'Total' })).toHaveTextContent(
      '$52.50',
    )
    expect(
      screen.getByRole('status', { name: 'Tip Amount' }),
    ).toHaveTextContent('$2.50')
  })
  it("see the can't be zero message when number of people is zero", async () => {
    // Arrange
    render(<App />)
    const user = userEvent.setup()
    const billInput = screen.getByLabelText('Bill')
    const numberOfPeopleInput = screen.getByLabelText('Number of People')
    const customInput = screen.getByPlaceholderText('Custom')
    // Act
    await user.type(numberOfPeopleInput, '1')
    await user.type(billInput, '100')
    await user.type(customInput, '5')
    await user.type(numberOfPeopleInput, '0')

    // Assert
    expect(screen.getByText("Can't be zero")).toHaveTextContent("Can't be zero")
    expect(screen.getByRole('status', { name: 'Total' })).toHaveTextContent(
      '$0.00',
    )
  })
})
