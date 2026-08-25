function SectionTitle({ eyebrow, title, description, align = 'left', id }) {
  const classes = ['section-title', align === 'center' && 'section-title--center']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
      <h2 id={id} className="section-title__heading">
        {title}
      </h2>
      {description && <p className="section-title__description">{description}</p>}
    </header>
  )
}

export default SectionTitle
