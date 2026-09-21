import { useLanguage } from '../../i18n/useLanguage.js'
import { useState } from 'react'
import SectionTitle from '../common/SectionTitle.jsx'
import LocalizedImageCaption from '../common/LocalizedImageCaption.jsx'
import { youtubeThumbnailText } from '../../i18n/artworkText.js'

function YoutubeFeature() {
  const { t } = useLanguage()
  const [isVideoPending, setIsVideoPending] = useState(false)

  return (
    <section className="youtube-feature" aria-labelledby="youtube-feature-title">
      <SectionTitle id="youtube-feature-title" eyebrow={t("YouTube")} title={t("公式動画")} />
      <div className="youtube-feature__media">
        {/* 홈 공식 유튜브 영상 썸네일
        저장 경로: /images/home/youtube-thumbnail.png
        아트메이크 소개 영상의 실제 썸네일 이미지
        실제 영상 연결 시 썸네일과 재생 버튼을 영상 플레이어로 교체
        */}
        <img
          className="youtube-feature__thumbnail"
          src={`${import.meta.env.BASE_URL}images/home/youtube-thumbnail.png`}
          alt={t("韓国アートメイクについて紹介するGYEOLDAM公式動画")}
        />
        <button
          className="youtube-feature__play"
          type="button"
          aria-label={t("動画を再生")}
          onClick={() => setIsVideoPending(true)}
        >
          {/* TODO: 공식 YouTube 영상 URL 확정 후 영상 재생 동작 연결 */}
          <span aria-hidden="true">▶</span>
        </button>
      </div>
      <LocalizedImageCaption lines={youtubeThumbnailText} />
      <p className="youtube-feature__status" aria-live="polite">
        {t(isVideoPending ? '動画はただいま準備中です。' : 'GYEOLDAM Official YouTube')}
      </p>
    </section>
  )
}

export default YoutubeFeature
