import { useLanguage } from '../../i18n/useLanguage.js'
import Container from './Container.jsx'

function PagePlaceholder({ eyebrow, title, description = '準備中です。' }) {
  const { t } = useLanguage()
  return (
    <section className="page-placeholder" aria-labelledby="page-title">
      <Container>
        {eyebrow && <p className="page-placeholder__eyebrow">{t(eyebrow)}</p>}
        <h1 id="page-title" className="page-placeholder__title">
          {t(title)}
        </h1>
        <p className="page-placeholder__description">{t(description)}</p>
      </Container>
    </section>
  )
}

export default PagePlaceholder
