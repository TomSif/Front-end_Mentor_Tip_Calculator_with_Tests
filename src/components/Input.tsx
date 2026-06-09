import { cn } from '../lib/utils'

interface InputProps {
  id: string
  icon: string
  value?: number
  isError: boolean
  onChange: (value: number) => void
}

const Input = ({ id, icon, onChange, value, isError }: InputProps) => {
  return (
    <div className="text-preset-3! relative w-full text-green-900">
      <input
        value={value}
        type="number"
        id={id}
        placeholder="0"
        className={cn(
          'bg-grey-50 placeholder:text-grey-300 w-full rounded-md border-2 border-transparent px-4 py-2 text-right focus:border-green-400! focus:outline-none! focus-visible:border-green-400! active:border-green-400!',
          isError ? 'border-orange-400' : '',
        )}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span className="text-grey-300 absolute top-1/2 left-4 -translate-y-1/2">
        <img src={icon} alt="" />
      </span>
    </div>
  )
}

export default Input
