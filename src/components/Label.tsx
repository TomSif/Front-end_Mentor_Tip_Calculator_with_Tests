interface LabelProps {
  label: string
  id: string
}

const Label = ({ label, id }: LabelProps) => {
  return (
    <label htmlFor={id} className="text-preset-5 text-grey-500">
      {label}
    </label>
  )
}

export default Label
