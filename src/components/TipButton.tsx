interface TipButtonProps {
  percent: number
}

const TipButton = ({ percent }: TipButtonProps) => {
  return (
    <button className="text-preset-3 text-grey-50 w-full rounded-md bg-green-900 px-4 py-2 text-center hover:bg-green-200 hover:text-green-900 active:bg-green-400 active:text-green-900">
      {percent}%
    </button>
  )
}

export default TipButton
