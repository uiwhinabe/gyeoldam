import { useLanguage } from '../../i18n/useLanguage.js'
import { directorCareer } from '../../data/about.js'
import Container from '../common/Container.jsx'

function DirectorProfile() {
  const { t } = useLanguage()
  return (
    <section className="director-profile" aria-labelledby="director-title">
      <Container>
        <div className="director-profile__layout">
          <div className="director-profile__media">
            <img src={`${import.meta.env.BASE_URL}images/about/director-profile.png`} alt={t("GYEOLDAM代表 KIM SEOYUN")} />
          </div>
          <div className="director-profile__content">
          <h2 id="director-title">{t("その人らしさを大切にした、")}<br />{t("自然な美しさを届けたい。")}</h2>
          <p className="director-profile__role">{t("GYEOLDAM 代表 / DIRECTOR")}</p>
          <p className="director-profile__name">{t("김서윤 | KIM SEOYUN")}</p>
          <ul>
            {directorCareer.map((career) => <li key={career}>{t(career)}</li>)}
          </ul>
          </div>
        </div>
        <p className="director-profile__message">{t("GYEOLDAMでは、一人ひとりのお顔立ちや雰囲気に寄り添い、")}<br />{t("その方が本来持っている美しさを活かすことを大切にしています。")}<br />{t("アートメイクを通して、鏡を見るたびに少し自信が持てたり、毎日の準備が少し楽になったり。")}<br />{t("そんな小さな変化が、日々の笑顔につながれば嬉しいです。")}<br />{t("初めての方にも安心してお任せいただけるよう、カウンセリングから施術まで、一つひとつ丁寧に向き合います。")}<br />{t("あなたらしい美しさを、ひとつひとつ丁寧に。それがGYEOLDAMの想いです。")}</p>
      </Container>
    </section>
  )
}

export default DirectorProfile
