import { useId, type InputHTMLAttributes } from 'react'

// Every normal input prop (name, type, value, onChange, onBlur…) plus label and error
type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }

function TextField({ label, error, ...rest }: TextFieldProps) {
  // Unique id per field, so label and message are always linked to the right input
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        // Screen readers say "invalid" and read the message linked by aria-describedby
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p id={errorId} className="field-error">
          {error}
        </p>
      )}
    </div>
  )
}

export default TextField
