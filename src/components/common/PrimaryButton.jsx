function PrimaryButton({ children, className = '', type = 'button', ...buttonProps }) {
  const classes = ['primary-button', className].filter(Boolean).join(' ')

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  )
}

export default PrimaryButton
