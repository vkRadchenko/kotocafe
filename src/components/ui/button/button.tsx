interface I_ButtonProps {
  //type?: 'primary' | 'secondary' | 'ghost' | 'danger'
  children?: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button = ({
  children,
  //type = 'primary',
  disabled,
  onClick = () => {},
  ...props
}: I_ButtonProps) => (
  <button
    className="btn btn-primary mb-2 mt-3"
    {...props}
    type="button"
    onClick={!disabled ? onClick : () => {}}
  >
    {children}
  </button>
)

export default Button
