# Language support

- `messages.js`: shared Japanese/Korean/English copy. Existing source text is the key; `JP` preserves that source verbatim. Original English headings also have Korean translations. Brand names and customer-entered values are not translated.
- `LanguageContext.jsx` / `useLanguage.js`: language state shared across routes. Default `JP`; `gyeoldam-language` in localStorage persists the selection. Invalid or unavailable storage falls back to Japanese. HTML `lang` follows the selection.
- `translate.js`: exact copy lookup and explicit templates for amounts, counts and accessibility labels. Reservation records retain their original identifiers and data; translation happens only at render time. Currency remains KRW; no exchange-rate conversion is performed.
- `artworkText.js`: transcripts of text embedded in existing images. `LocalizedImageCaption` exposes Korean/English translations without editing the original artwork. Japanese renders the original images without captions.
- `translate.test.js`: run `node --test src/i18n/translate.test.js`.

## Coverage

Shared header, footer, navigation and quick menu; home; treatments; booking (categories, cards, director selection, calendar, prices, form validation, confirmation); all My Account tabs; About; login; existing sign-up and password-recovery placeholders; reservation details, date/time changes and cancellation.

## 확인이 필요한 원문

1. 소개의 대표 이름은 `KIM SEOYUN` (`김서윤`), 예약 데이터의 원장 이름은 `KIM GYEOL 院長`입니다. 동일 인물인지 판단할 수 없어 이름을 통일하지 않았습니다. 직함만 번역했습니다.
2. 이벤트 이미지의 작은 배지/할인 안내 문구는 원본 해상도만으로 정확한 판독이 어려워 추측한 번역을 추가하지 않았습니다. 선명한 원본 또는 원문 확인이 필요합니다. 읽을 수 있는 주요 문구와 금액은 번역 설명에 포함했습니다.
3. 일본어가 포함된 이미지 7개(홈 슬라이드 3개, 이벤트 카드 3개, YouTube 썸네일)는 원본을 유지합니다. 이미지 아래의 “이미지 문구 번역 / Text in this image”에서 번역을 펼쳐 볼 수 있습니다. 이미지 안의 일본어 자체를 없애려면 언어별 이미지 제작 또는 원본 에셋 교체가 필요합니다.

## Validation

- Build, lint, dictionary completeness, Japanese round-trip and dynamic translation tests.
- Browser checks for all requested routes in JP/KR/EN at desktop, tablet and mobile widths; persistence, selected-state indication, outside click, Escape and arrow-key language selection.
- Live login validation, preservation of typed values while switching languages, all My Account tabs and treatment categories, booking completion, change and cancellation flows.
- Translated My Account navigation remains horizontally scrollable within its mobile container. The About page's pre-existing 26px horizontal overflow at a 320px viewport also occurs in Japanese and was not changed as part of localization.
