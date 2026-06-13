import { describe, it, expect } from 'vitest'
import { calculateTipAmount, calculateTotalAmount } from './calculation'

describe('calculateTipAmount', () => {
  it('calculate tip amount from a bill divided by people', () => {
    // Arrange
    const bill = 100
    const tipPercent = 10
    const numberOfPeople = 2
    // Act
    const tipAmount = calculateTipAmount({ bill, tipPercent, numberOfPeople })
    // Assert
    expect(tipAmount).toBe(5)
  })
  it('calculate tip amount from a bill divided by zero people', () => {
    // Arrange
    const bill = 100
    const tipPercent = 10
    const numberOfPeople = 0
    // Act
    const tipAmount = calculateTipAmount({ bill, tipPercent, numberOfPeople })
    // Assert
    expect(tipAmount).toBe(0)
  })
  it('calculate tip amount when tip percentage is null', () => {
    // Arrange
    const bill = 100
    const tipPercent = null
    const numberOfPeople = 0
    // Act
    const tipAmount = calculateTipAmount({ bill, tipPercent, numberOfPeople })
    // Assert
    expect(tipAmount).toBe(0)
  })
})

describe('calculateTotalAmount', () => {
  it('calculate total amount when tip percentage is null', () => {
    // Arrange
    const bill = 100
    const tipPercent = null
    const numberOfPeople = 2
    // Act
    const totalAmount = calculateTotalAmount({
      bill,
      tipPercent,
      numberOfPeople,
    })
    // Assert
    expect(totalAmount).toBe(0)
  })
  it('calculate total amount when result should be three decimals', () => {
    // Arrange
    const bill = 277
    const tipPercent = 15
    const numberOfPeople = 2
    // Act
    const totalAmount = calculateTotalAmount({
      bill,
      tipPercent,
      numberOfPeople,
    })
    // Assert
    expect(totalAmount).toBe(159.27)
  })
  it('calculate total amount when number of people is zero', () => {
    // Arrange
    const bill = 100
    const tipPercent = 10
    const numberOfPeople = 0
    // Act
    const totalAmount = calculateTotalAmount({
      bill,
      tipPercent,
      numberOfPeople,
    })
    // Assert
    expect(totalAmount).toBe(0)
  })
  it('calculate total amount from a bill divided by people', () => {
    // Arrange
    const bill = 100
    const tipPercent = 10
    const numberOfPeople = 2
    // Act
    const totalAmount = calculateTotalAmount({
      bill,
      tipPercent,
      numberOfPeople,
    })
    // Assert
    expect(totalAmount).toBe(55)
  })
})
