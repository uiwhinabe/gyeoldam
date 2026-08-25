function Container({ children, className = '', as: Element = 'div' }) {
  const classes = ['container', className].filter(Boolean).join(' ')

  return <Element className={classes}>{children}</Element>
}

export default Container
