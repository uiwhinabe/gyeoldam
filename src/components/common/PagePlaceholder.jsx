import Container from './Container.jsx'

function PagePlaceholder({ eyebrow, title, description = '準備中です。' }) {
  return (
    <section className="page-placeholder" aria-labelledby="page-title">
      <Container>
        {eyebrow && <p className="page-placeholder__eyebrow">{eyebrow}</p>}
        <h1 id="page-title" className="page-placeholder__title">
          {title}
        </h1>
        <p className="page-placeholder__description">{description}</p>
      </Container>
    </section>
  )
}

export default PagePlaceholder
