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
  it('remplir les inputs et clicker sur un bouton de pourcentage', async () => {
    // Arrange : on rend le composant et on prépare l'utilisateur simulé
    render(<App />)
    const user = userEvent.setup()

    // Arrange : on récupère les éléments avec lesquels on va interagir
    const billInput = screen.getByLabelText('Bill')
    const numberOfPeopleInput = screen.getByLabelText('Number of People')
    const buttonTenPercent = screen.getByRole('button', { name: '10%' })
    // Act : on simule ce que ferait un utilisateur, étape par étape
    await user.type(billInput, '100')
    await user.type(numberOfPeopleInput, '2')
    await user.click(buttonTenPercent)

    // Assert : viendra après, une fois qu'on sait quoi vérifier
    expect(screen.getByRole('status', { name: 'Total' })).toHaveTextContent(
      '$55.00',
    )
    expect(
      screen.getByRole('status', { name: 'Tip Amount' }),
    ).toHaveTextContent('$5.00')
  })
})
