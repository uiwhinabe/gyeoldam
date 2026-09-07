import { directorCareer } from '../../data/about.js'
import Container from '../common/Container.jsx'

function DirectorProfile() {
  return (
    <section className="director-profile" aria-labelledby="director-title">
      <Container>
        <div className="director-profile__layout">
          <div className="director-profile__media">
            <img src={`${import.meta.env.BASE_URL}images/about/director-profile.png`} alt="GYEOLDAM代表 KIM SEOYUN" />
          </div>
          <div className="director-profile__content">
          <h2 id="director-title">その人らしさを大切にした、<br />自然な美しさを届けたい。</h2>
          <p className="director-profile__role">GYEOLDAM 代表 / DIRECTOR</p>
          <p className="director-profile__name">김서윤 | KIM SEOYUN</p>
          <ul>
            {directorCareer.map((career) => <li key={career}>{career}</li>)}
          </ul>
          </div>
        </div>
        <p className="director-profile__message">GYEOLDAMでは、一人ひとりのお顔立ちや雰囲気に寄り添い、<br />その方が本来持っている美しさを活かすことを大切にしています。<br />アートメイクを通して、鏡を見るたびに少し自信が持てたり、毎日の準備が少し楽になったり。<br />そんな小さな変化が、日々の笑顔につながれば嬉しいです。<br />初めての方にも安心してお任せいただけるよう、カウンセリングから施術まで、一つひとつ丁寧に向き合います。<br />あなたらしい美しさを、ひとつひとつ丁寧に。それがGYEOLDAMの想いです。</p>
      </Container>
    </section>
  )
}

export default DirectorProfile
