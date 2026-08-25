import { useState } from 'react'
import { Link } from 'react-router-dom'
import { frequentlyAskedQuestions } from '../../data/homeContent.js'
import SectionTitle from '../common/SectionTitle.jsx'

function FaqSection() {
  // 한 번에 하나의 답변만 열리며 같은 질문을 다시 누르면 닫힙니다.
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <SectionTitle id="faq-title" eyebrow="FAQ" title="よくあるご質問" />
        <div className="faq-list">
          {frequentlyAskedQuestions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`

            return (
              <article key={question} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                <h3>
                  <button
                    className="faq-item__question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span><b aria-hidden="true">{String(index + 1).padStart(2, '0')}</b>{question}</span>
                    <span
                      className={`faq-item__icon${isOpen ? ' faq-item__icon--open' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div id={answerId} className="faq-item__answer" hidden={!isOpen}>
                  <span aria-hidden="true">A.</span>
                  <p>{answer}</p>
                </div>
              </article>
            )
          })}
        </div>
        <Link className="faq-section__more" to="/#faq">
          FAQをもっと見る <span aria-hidden="true">→</span>
        </Link>
    </section>
  )
}

export default FaqSection
