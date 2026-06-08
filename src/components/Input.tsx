interface InputProps {
  id: string
  span: string
}

const Input = ({ id, span }: InputProps) => {
  return (
    <div className="text-preset-3 relative w-full text-green-900">
      <input
        type="number"
        id={id}
        placeholder="0"
        className="bg-grey-50 placeholder:text-grey-300 w-full rounded-md px-4 py-2 text-right"
      />
      <span className="text-grey-300 absolute top-1/2 left-4 -translate-y-1/2">
        <img src={span} alt="" />
      </span>
    </div>
  )
}

export default Input
