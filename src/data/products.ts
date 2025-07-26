export interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export const products: Product[] = [
  // 향수
  {
    id: 1,
    category: '향수',
    name: '조 말론 런던 잉글리쉬 페어 앤 프리지아 코롱',
    description: '가을의 정수. 화이트 프리지아 부케향에 이제 막 익은 배의 신선함을 입히고…',
    image: '/images/perfume1.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=조+말론+런던+잉글리쉬+페어+앤+프리지아+코롱',
  },
  {
    id: 2,
    category: '향수',
    name: '딥티크 오 드 퍼퓸 롬브르 단 로',
    description: '불가리안 장미와 까시스 잎의 향기. 달콤하고 스파이시한 향의 조화.',
    image: '/images/perfume2.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=딥티크+오+드+퍼퓸+롬브르+단+로',
  },
  {
    id: 3,
    category: '향수',
    name: '바이레도 블랑쉬 오 드 퍼퓸',
    description: '순수하고 깨끗한 느낌을 주는 향. 화이트 로즈, 바이올렛, 샌달우드의 조화.',
    image: '/images/perfume3.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=바이레도+블랑쉬+오+드+퍼퓸',
  },
  // 핸드크림
  {
    id: 4,
    category: '핸드크림',
    name: '이솝 레저렉션 아로마틱 핸드 밤',
    description: '식물성 오일과 추출물이 함유되어 손과 큐티클에 풍부한 수분을 공급합니다.',
    image: '/images/handcream1.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=이솝+레저렉션+아로마틱+핸드+밤',
  },
  {
    id: 5,
    category: '핸드크림',
    name: '탬버린즈 누드에이치앤드크림',
    description: '끈적임 없이 빠르게 흡수되며, 베르가못, 페티그레인, 샌달우드의 향이 특징입니다.',
    image: '/images/handcream2.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=탬버린즈+누드에이치앤드크림',
  },
  {
    id: 6,
    category: '핸드크림',
    name: '록시땅 시어 버터 드라이 스킨 핸드 크림',
    description: '시어버터가 20% 함유되어 건조한 손을 부드럽고 건강하게 가꿔줍니다.',
    image: '/images/handcream3.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=록시땅+시어+버터+드라이+스킨+핸드+크림',
  },
  // 쥬얼리
  {
    id: 7,
    category: '쥬얼리',
    name: '티파니앤코 더블 하트 태그 펜던트',
    description: '아이코닉한 디자인의 펜던트로, 사랑과 우정의 상징입니다.',
    image: '/images/jewelry1.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=티파니앤코+더블+하트+태그+펜던트',
  },
  {
    id: 8,
    category: '쥬얼리',
    name: '까르띠에 러브 브레이슬릿',
    description: '영원한 사랑을 상징하는 스크루 드라이버 잠금 장치가 특징입니다.',
    image: '/images/jewelry2.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=까르띠에+러브+브레이슬릿',
  },
  {
    id: 9,
    category: '쥬얼리',
    name: '스와로브스키 스완 네크리스',
    description: '스와로브스키의 상징인 백조 로고를 크리스탈 파베 세팅으로 우아하게 표현했습니다.',
    image: '/images/jewelry3.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=스와로브스키+스완+네크리스',
  },
  // 시계
  {
    id: 10,
    category: '시계',
    name: '롤렉스 서브마리너',
    description: '다이버 워치의 클래식. 견고함과 기능성, 시대를 초월한 디자인을 자랑합니다.',
    image: '/images/watch1.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=롤렉스+서브마리너',
  },
  {
    id: 11,
    category: '시계',
    name: '태그호이어 까레라 칼리버 5',
    description: '레이싱에서 영감을 받은 디자인으로, 스포티하면서도 우아한 매력을 선사합니다.',
    image: '/images/watch2.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=태그호이어+까레라+칼리버+5',
  },
  {
    id: 12,
    category: '시계',
    name: '다니엘 웰링턴 클래식 쁘띠',
    description: '미니멀하고 세련된 디자인으로 어떤 스타일에도 잘 어울리는 데일리 워치입니다.',
    image: '/images/watch3.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=다니엘+웰링턴+클래식+쁘띠',
  },
  // 화장품
  {
    id: 13,
    category: '화장품',
    name: '에스티 로더 더블 웨어 파운데이션',
    description: '뛰어난 커버력과 지속력으로 오랜 시간 무결점 피부를 연출해줍니다.',
    image: '/images/cosmetics1.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=에스티+로더+더블+웨어+파운데이션',
  },
  {
    id: 14,
    category: '화장품',
    name: '입생로랑 루쥬 쀠르 꾸뛰르',
    description: '선명한 컬러와 편안한 사용감. 입술을 촉촉하고 아름답게 표현해줍니다.',
    image: '/images/cosmetics2.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=입생로랑+루쥬+쀠르+꾸뛰르',
  },
  {
    id: 15,
    category: '화장품',
    name: 'SK-II 피테라 에센스',
    description: '피부 본연의 건강한 리듬을 되찾아 맑고 투영한 피부로 가꿔주는 필수 에센스.',
    image: '/images/cosmetics3.jpg',
    link: 'https://www.coupang.com/np/search?component=&q=SK-II+피테라+에센스',
  },
];
