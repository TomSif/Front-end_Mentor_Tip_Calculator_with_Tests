interface LabelProps {
  label: string
  id: string
  isError: boolean
}

const Label = ({ label, id, isError }: LabelProps) => {
  return (
    <div className="relative w-full">
      <label htmlFor={id} className="text-preset-5 text-grey-500 w-full">
        {label}
      </label>
      {isError ? (
        <p className="text-preset-5 absolute top-1/2 -right-12 -translate-1/2 text-right text-orange-400">
          Can't be zero
        </p>
      ) : (
        ''
      )}
    </div>
  )
}

export default Label
