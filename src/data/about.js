export const brandFeatures = [
  {
    number: '01',
    title: 'メイクのプロが施術',
    description: 'デザインから施術まで、プロのメイクアップアーティストが担当します。お客様のお顔立ちや雰囲気に合わせた、ベストなデザインをご提案いたします。',
  },
  {
    number: '02',
    title: 'GYEOLDAM安心保証制度',
    description: '半年以内のリタッチを特別料金でお受けいただけます。美しい仕上がりを長く保てるようサポートします。',
  },
  {
    number: '03',
    title: '痛みの少ない施術',
    description: '提携クリニックにて麻酔クリームをご用意しています。痛みをできるだけ抑えた施術が可能です。',
  },
]

export const directorCareer = [
  'アートメイク施術歴 10年',
  '累計施術 1,000件以上',
  '国内アートメイク専門教育課程 修了',
  '海外アートメイクセミナー多数受講',
  '2019年 GYEOLDAM設立',
]

const staffImage = (fileName) => `${import.meta.env.BASE_URL}images/about/staff/${fileName}`

export const aboutStaff = [
  {
    id: 'staff-01', name: 'SEOYEON KIM', localName: 'キム ソヨン',
    description: '丁寧なカウンセリングで、\n似合うを引き出します。',
    image: staffImage('staff-group-a.png'), imagePosition: 'seoyeon',
    imageAlt: 'スタッフSEOYEON KIMのプロフィール', instagram: '@seoyeon_gyeoldam', instagramUrl: 'https://www.instagram.com/seoyeon_gyeoldam/',
  },
  {
    id: 'staff-02', name: 'MINJI LEE', localName: 'イ ミンジ',
    description: '毎日鏡を見るのが楽しみになる、\nそんな仕上がりを目指しています。',
    image: staffImage('staff-group-a.png'), imagePosition: 'minji',
    imageAlt: 'スタッフMINJI LEEのプロフィール', instagram: '@minji_gyeoldam', instagramUrl: 'https://www.instagram.com/minji_gyeoldam/',
  },
  {
    id: 'staff-03', name: 'JIEUN PARK', localName: 'パク ジウン',
    description: '小さなお悩みもお気軽にご相談ください。\n一緒に似合うデザインを見つけましょう。',
    image: staffImage('staff-group-b.png'), imagePosition: 'jieun',
    imageAlt: 'スタッフJIEUN PARKのプロフィール', instagram: '@jieun_gyeoldam', instagramUrl: 'https://www.instagram.com/jieun_gyeoldam/',
  },
  {
    id: 'staff-04', name: 'HYUNWOO JUNG', localName: 'チョン ヒョヌ',
    description: 'ナチュラルだけど、どこか印象に残る。\nそんな美しさを大切にしています。',
    image: staffImage('staff-group-a.png'), imagePosition: 'hyunwoo',
    imageAlt: 'スタッフHYUNWOO JUNGのプロフィール', instagram: '@hyunwoo_gyeoldam', instagramUrl: 'https://www.instagram.com/hyunwoo_gyeoldam/',
  },
  {
    id: 'staff-05', name: 'YUNA CHOI', localName: 'チェ ユナ',
    description: 'さりげない変化で、\nもっと自分を好きになれる\nデザインを大切にしています。',
    image: staffImage('staff-group-c.png'), imagePosition: 'yuna',
    imageAlt: 'スタッフYUNA CHOIのプロフィール', instagram: '@yuna_gyeoldam', instagramUrl: 'https://www.instagram.com/yuna_gyeoldam/',
  },
]
