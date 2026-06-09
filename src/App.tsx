import { useState } from 'react'
import Label from './components/Label'
import Input from './components/Input'
import TipButton from './components/TipButton'
import Result from './components/Result'

type TipPercentage = 5 | 10 | 15 | 25 | 50
const TIP_PERCENTAGES: TipPercentage[] = [5, 10, 15, 25, 50]

function App() {
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0)
  const [bill, setBill] = useState<number>(0)
  const [tipPercent, setTipPercent] = useState<number | null>(null)
  const [customValue, setCustomValue] = useState<string>('')
  const [peopleTouched, setPeopleTouched] = useState<boolean>(false)

  const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCustomValue(value)
    setTipPercent(value === '' ? null : Number(value))
  }
  const handlePercent = (percent: number) => {
    setCustomValue('')
    setTipPercent(percent)
  }
  const handlePeopleChange = (value: number) => {
    setNumberOfPeople(value)
    setPeopleTouched(true)
  }
  const handleReset = () => {
    setNumberOfPeople(0)
    setBill(0)
    setTipPercent(null)
    setCustomValue('')
    setPeopleTouched(false)
  }

  const tipAmountCalcul = () => {
    if (tipPercent === null || numberOfPeople === 0) return 0
    const tipAmount = (bill * (tipPercent / 100)) / numberOfPeople
    return Number(tipAmount.toFixed(2))
  }
  const totalAmountCalcul = () => {
    if (tipPercent === null || numberOfPeople === 0) return 0
    const totalAmount = (bill * (1 + tipPercent / 100)) / numberOfPeople
    return Number(totalAmount.toFixed(2))
  }

  return (
    <div className="bg-grey-200 flex min-h-svh flex-col items-center justify-start py-12.5 lg:justify-center">
      <header className="w-full pb-10 lg:pb-22">
        <img src="/images/logo.svg" alt="Logo splitter" className="mx-auto" />
      </header>
      <main className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-white px-6 py-8 lg:max-h-120 lg:min-h-0 lg:max-w-230 lg:flex-row lg:px-8">
        <section className="w-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-start gap-8 px-2"
          >
            <div className="flex w-full flex-col gap-2">
              <Label label={'Bill'} id={'bill'} isError={false} />
              <Input
                id={'bill'}
                icon={'/images/icon-dollar.svg'}
                onChange={setBill}
                value={bill}
                isError={false}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label label={'Select Tip %'} id={'select'} isError={false} />
              <fieldset className="w-full">
                <ul className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
                  {TIP_PERCENTAGES.map((value) => (
                    <li key={value} className="w-full max-w-147 min-w-29">
                      <TipButton
                        percent={value}
                        onClick={handlePercent}
                        isActive={tipPercent === value && customValue === ''}
                      />
                    </li>
                  ))}
                  <li>
                    <input
                      type="number"
                      name="custom"
                      id="custom"
                      value={customValue}
                      placeholder="Custom"
                      className="bg-grey-50 placeholder:text-grey-300 text-preset-3 w-full rounded-md px-4 py-2 text-center"
                      onChange={handleCustomTip}
                    />
                  </li>
                </ul>
              </fieldset>
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label
                label={'Number of People'}
                id={'people'}
                isError={peopleTouched && numberOfPeople === 0}
              />
              <Input
                id={'people'}
                icon={'/images/icon-person.svg'}
                value={numberOfPeople}
                onChange={handlePeopleChange}
                isError={peopleTouched && numberOfPeople === 0}
              />
            </div>
          </form>
        </section>
        <section className="flex w-full flex-col justify-between gap-6 rounded-2xl bg-green-900 p-6 lg:min-h-100 lg:max-w-103">
          <div className="flex flex-col gap-6">
            <Result label={'Tip Amount'} result={tipAmountCalcul()} />
            <Result label={'Total'} result={totalAmountCalcul()} />
          </div>
          <button
            onClick={handleReset}
            type="button"
            className="bg-green-750 text-preset-4 w-full rounded-lg py-2 text-center text-green-800 hover:bg-green-400 hover:text-green-900 active:bg-green-200 active:text-green-900 lg:mb-4"
          >
            RESET
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
