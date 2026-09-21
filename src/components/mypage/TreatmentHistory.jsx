import { useLanguage } from '../../i18n/useLanguage.js'
import { treatmentHistory } from '../../data/mypageData.js'
import { formatWon } from '../../data/treatments.js'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'

function TreatmentHistory() {
  const { t } = useLanguage()
  return (
    <section className="mypage-detail-section" aria-labelledby="treatment-history-title">
      <header className="mypage-detail-section__header"><p>{t("TREATMENT HISTORY")}</p><h2 id="treatment-history-title">{t("施術履歴")}</h2></header>
      <div className="treatment-history-list">
        {treatmentHistory.map((item) => (
          <article key={item.id} className={`treatment-history-card${item.canceled ? ' treatment-history-card--canceled' : ''}`}>
            <div className="treatment-history-card__heading">
              <div><span>{t(item.date)}</span><strong>{t(item.status)}</strong></div>
              <h3>{t(item.name)}</h3>
            </div>
            {item.canceled ? (
              <div className="treatment-history-card__cancel-message">{t("この施術はキャンセルされました。")}<br />{t("ビフォー・アフター写真はありません。")}</div>
            ) : (
              <div className="treatment-history-card__images">
                <figure>
                  {/* 시술 이력 비포 이미지
                  추후 권장 경로: /images/mypage/treatments/{시술ID}-before.jpg
                  실제 이미지 추가 시 beforeImage 데이터에 경로 추가
                  */}
                  {item.beforeImage ? <img src={item.beforeImage} alt={t(item.beforeAlt)} /> : <ImagePlaceholder label={t("BEFORE")} aspectRatio="4 / 3" ariaLabel={t(`${item.beforeAlt} 画像準備中`)} />}
                </figure>
                <figure>
                  {/* 시술 이력 애프터 이미지
                  추후 권장 경로: /images/mypage/treatments/{시술ID}-after.jpg
                  실제 이미지 추가 시 afterImage 데이터에 경로 추가
                  */}
                  {item.afterImage ? <img src={item.afterImage} alt={t(item.afterAlt)} /> : <ImagePlaceholder label={t("AFTER")} aspectRatio="4 / 3" ariaLabel={t(`${item.afterAlt} 画像準備中`)} />}
                </figure>
              </div>
            )}
            <dl>
              <div><dt>{t("担当者")}</dt><dd>{t(item.artist)}</dd></div>
              <div><dt>{t("施術料金")}</dt><dd>{t(formatWon(item.price))}</dd></div>
              <div><dt>{t("所要時間")}</dt><dd>{t(item.duration)}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TreatmentHistory
