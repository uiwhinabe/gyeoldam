function ImagePlaceholder({
  label = '画像準備中',
  className = '',
  aspectRatio = '4 / 3',
  ariaLabel,
}) {
  const classes = ['image-placeholder', className].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      style={{ aspectRatio }}
      role="img"
      aria-label={ariaLabel || label}
    >
      {/* 이미지 플레이스홀더
      추후 권장 경로: /images/{페이지명}/{이미지명}.jpg
      실제 이미지 추가 시 이 플레이스홀더를 img 또는 배경 이미지로 교체
      */}
      <span className="image-placeholder__label">{label}</span>
    </div>
  )
}

export default ImagePlaceholder
