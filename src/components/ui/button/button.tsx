import styled from 'styled-components'

interface I_ButtonProps {
  //type?: 'primary' | 'secondary' | 'ghost' | 'danger'
  children?: React.ReactNode
  disabled?: boolean
  size?: string
  block?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  type: 'button' | 'submit' | 'reset' | undefined
}

const Button = styled(
  ({
    children,
    size,
    block,
    disabled,
    onClick = () => {},
    type,
    ...props
  }: I_ButtonProps) => (
    <button {...props} type={type} onClick={!disabled ? onClick : () => {}}>
      {children}
    </button>
  )
)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  user-select: none;
  letter-spacing: 0.36px;
  width: ${(p) => (p.block ? '100%' : 'fit-content')};
  padding: 0
    ${(p: any) =>
      p.size === 'sm'
        ? '1.1rem'
        : p.size === 'md'
        ? '1.4rem'
        : p.size === 'lg'
        ? '1.6rem'
        : '1.1rem'};
  height: ${(p) =>
    p.size === 'sm'
      ? '34px'
      : p.size === 'md'
      ? '37px'
      : p.size === 'lg'
      ? '40px'
      : '34px'};

  background-color: ${(p) => (p.disabled ? '#c2c2c2' : '#436e6f')};

  :hover {
    background-color: ${(p) => (p.disabled ? '#c2c2c2' : '#619595')};
    transition: 0.6s;
  }
`

export default Button
