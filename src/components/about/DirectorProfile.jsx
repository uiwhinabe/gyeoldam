import { directorCareer } from '../../data/about.js'
import Container from '../common/Container.jsx'
import ImagePlaceholder from '../common/ImagePlaceholder.jsx'

function DirectorProfile() {
  return (
    <section className="director-profile" aria-labelledby="director-title">
      <Container className="director-profile__layout">
        <div className="director-profile__media">
          {/* 원장 프로필 이미지
          추후 권장 경로: /images/about/director-profile.jpg
          실제 원장 사진 추가 시 이 플레이스홀더를 img로 교체
          */}
          <ImagePlaceholder label="DIRECTOR PROFILE" aspectRatio="4 / 5" ariaLabel="GYEOLDAM 院長プロフィール画像 準備中" />
        </div>
        <div className="director-profile__content">
          <p className="director-profile__eyebrow">DIRECTOR</p>
          <h2 id="director-title">代表院長</h2>
          <p className="director-profile__name">KIM GYEOL</p>
          <p className="director-profile__message">
            流行だけを追うのではなく、その方の表情と日常に長くなじむ美しさを大切にしています。
          </p>
          <ul>
            {directorCareer.map((career) => <li key={career}>{career}</li>)}
          </ul>
          {/* TODO: 원장 공식 Instagram 계정 확정 후 실제 외부 링크 연결 */}
          <button type="button" className="director-profile__instagram">Instagram 準備中 ↗</button>
        </div>
      </Container>
    </section>
  )
}

export default DirectorProfile
