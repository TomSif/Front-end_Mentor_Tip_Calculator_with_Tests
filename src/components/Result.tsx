interface ResultProps {
  label: string
  result: number
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const Result = ({ label, result }: ResultProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col gap-0.5">
        <p className="text-preset-5 text-white">{label}</p>
        <span className="text-grey-400 text-preset-6">/ person</span>
      </div>
      <div
        role="status"
        aria-live="polite"
        aria-label={label}
        className="text-preset-2 lg:text-preset-1 text-right text-green-400"
      >
        {formatter.format(result)}
      </div>
    </div>
  )
}

export default Result
