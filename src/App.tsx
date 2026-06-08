import Label from './components/Label'
import Input from './components/Input'
import TipButton from './components/TipButton'
import Result from './components/Result'

type TipPercentage = 5 | 10 | 15 | 25 | 50
const TIP_PERCENTAGES: TipPercentage[] = [5, 10, 15, 25, 50]

function App() {
  return (
    <div className="bg-grey-200 flex min-h-svh flex-col items-center justify-start py-12.5">
      <header className="w-full pb-10">
        <img src="/images/logo.svg" alt="Logo splitter" className="mx-auto" />
      </header>
      <main className="flex flex-col items-center justify-center gap-8 rounded-2xl bg-white px-6 py-8">
        <section className="w-full">
          <form action="" className="flex flex-col items-start gap-8 px-2">
            <div className="flex w-full flex-col gap-2">
              <Label label={'Bill'} id={'bill'} />
              <Input id={'bill'} span={'/public/images/icon-dollar.svg'} />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label label={'Select Tip %'} id={'select'} />
              <fieldset className="w-full">
                <ul className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
                  {TIP_PERCENTAGES.map((value) => (
                    <li key={value} className="w-full max-w-147 min-w-29">
                      <TipButton percent={value} />
                    </li>
                  ))}
                  <li>
                    <input
                      type="number"
                      name="custom"
                      id="custom"
                      placeholder="Custom"
                      className="bg-grey-50 placeholder:text-grey-300 text-preset-3 w-full rounded-md px-4 py-2 text-center"
                    />
                  </li>
                </ul>
              </fieldset>
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label label={'Number of People'} id={'people'} />
              <Input id={'people'} span={'/public/images/icon-person.svg'} />
            </div>
          </form>
        </section>
        <section className="flex w-full flex-col gap-6 rounded-2xl bg-green-900 p-6">
          <Result label={'Tip Amount'} result={0} />
          <Result label={'Total'} result={0} />
          <button className="bg-green-750 text-preset-4 w-full rounded-lg py-2 text-center text-green-800 hover:bg-green-400 hover:text-green-900 active:bg-green-200 active:text-green-900">
            RESET
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
