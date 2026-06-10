interface CalculateAmount {
  tipPercent: number | null
  numberOfPeople: number
  bill: number
}

export const calculateTipAmount = ({
  bill,
  tipPercent,
  numberOfPeople,
}: CalculateAmount) => {
  if (tipPercent === null || numberOfPeople === 0) return 0
  const tipAmount = (bill * (tipPercent / 100)) / numberOfPeople
  return Number(tipAmount.toFixed(2))
}

export const calculateTotalAmount = ({
  bill,
  tipPercent,
  numberOfPeople,
}: CalculateAmount) => {
  if (tipPercent === null || numberOfPeople === 0) return 0
  const totalAmount = (bill * (1 + tipPercent / 100)) / numberOfPeople
  return Number(totalAmount.toFixed(2))
}
