import { cn } from '../lib/utils'

interface TipButtonProps {
  percent: number
  isActive: boolean
  onClick: (percent: number) => void
}

const TipButton = ({ percent, isActive, onClick }: TipButtonProps) => {
  return (
    <button
      type="button"
      onClick={() => onClick(percent)}
      className={cn(
        'text-preset-3! text-grey-50 w-full rounded-md bg-green-900 px-4 py-2 text-center hover:bg-green-200 hover:text-green-900',
        isActive ? 'bg-green-400 text-green-900' : '',
      )}
    >
      {percent}%
    </button>
  )
}

export default TipButton
