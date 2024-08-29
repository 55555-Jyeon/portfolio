import { ProjectDataType } from "./type";

export const projects: ProjectDataType = [
  {
    title: "YeoGi(여기, 여행을 기록하다)",
    description: `NextJS를 기반으로 디자이너, 프론트 팀과 백엔드 팀 총 7명이 작업한 프로젝트입니다. Yeogi(여기)는 여행을 즐기는 사람들이 자신들의 여행 추억을 게시글로 남기며 여행지에 대한 정보를 공유하는 사이트입니다.`,
    src: "projects/06.png",
    github: "https://github.com/mobi-projects/yeogi-client",
    figma:
      "https://www.figma.com/design/TQX56AWMGdAT5DYDpmWKBk/YeoGi?node-id=0-1&t=wVruCvoqgm2MsTXe-1",
    color: "#67B6FB",
  },
  {
    title: "PR Deliver",
    description:
      " 여기(yeogi) 프로젝트를 같이 진행하는 팀원 중 일부와 함께 진행하는 프로젝트입니다. PR 생성 시 바로 팀원에게 메신저를 통해 알림이 가는 서비스를 만들고 있습니다. 프로젝트를 진행하는 과정에서 PR 관련 불편함을 느꼈고, 다른 개발자들도 협업할 때 이 서비스를 이용할 수 있도록 프로젝트로 만들고자 진행하게 됐습니다.",
    src: "projects/07.png",
    github: "https://github.com/ThugDev/PR-Deliver",
    figma:
      "https://www.figma.com/design/zBv18pZAnySUtNNVkK1AyA/PR-deliver?node-id=0-1&t=oTKywkldKPv9eG0F-1",
    color: "#67B6FB",
  },
  {
    title: "PurrTunes",
    description:
      " ‘사용자 친화적인 페이지 말고 개발자가 만들면서 재밌을 페이지를 만들어볼까’에서 시작된 토이 프로젝트 PurrTunes(퍼튠즈)는 고양이가 랜덤으로 틀어주는 음악 재생 사이트입니다. 로그인 회원만 고양이 Jester(제스터)를 만나볼 수 있습니다.",
    src: "projects/08.png",
    github: "https://github.com/ThugDev/PurrTunes",
    figma:
      "https://www.figma.com/design/LuCkihZx7jjExxfYLwvu0c/PurrTunes?node-id=0-1&t=WFb7sd66eFCxmGqw-1",
    color: "#67B6FB",
  },
  {
    title: "Portfolio",
    description:
      "NextJS에 대해 공부한 뒤 처음으로 활용해 보기 위해 해당 프레임워크와 타입스크립트로 포트폴리오 페이지를 만들어봤습니다. 전부터 써보고 싶었던 Framer Motion의 애니메이션을 활용해 skills 페이지를 구현했습니다.",
    src: "projects/04.png",
    github: "https://github.com/55555-Jyeon/portfolio",
    figma:
      "https://www.figma.com/file/IIvWP43UFboHBftgWkXxsA/final-portfolio-only?type=design&node-id=23%3A542&mode=design&t=zWLVALg0ek9uOJzb-1",
    color: "#88A28D",
  },
  {
    title: "Chap Chap",
    description:
      "협업의 필요성과 중요성을 깨닫고 에자일 방법론에 초점을 둔 프로젝트입니다. 플래닝 포커 방식을 도입했으며 협업 툴(Linear, Discord) 및 PR template을 적극 활용하고자 했습니다. 병목 현상 방지를 위해 문제 상황을 반드시 git issue를 활용해 공유하도록 규칙을 만들었습니다. 또한 공유된 병목 현상의 빠른 해결 및 유지 보수를 위해 서로의 코드를 이해할 수 있도록 PR template 적용 및 review를 강제했습니다.",
    src: "projects/02.svg",
    github: "https://github.com/55555-Jyeon/mobi-chap-chap",
    figma:
      "https://www.figma.com/file/5pE3hQpUwjZ33yTfkxKhXW/chap-chap?type=design&node-id=0%3A1&mode=design&t=WFOwLMtVYKXpqbqp-1",
    velog: "https://velog.io/@55555-jyeon/Chap-Chap",
    color: "#F7C544",
  },
  {
    title: "Post Mobism",
    description:
      "이전 프로젝트에서 부족했던 API 분석을 위해 sequence diagram을 그려보고 얘기를 나눠보는 시간을 가졌습니다. 구현 가능한 기능들을 나열 후 비슷한 기능을 나눠 다양한 기능 구현을 시도해 볼 수 있도록 분담했습니다. 또한 사용해 보지 않았던 라이브러리를 써보고 싶어서 redux-tool-kit을 활용해 전역 상태를 관리해봤습니다.",
    src: "projects/03.svg",
    github: "https://github.com/55555-Jyeon/PostMobism",
    figma:
      "https://www.figma.com/file/w8lcfuj1gyct5GG5FWKnj3/postMobism?type=design&node-id=0%3A1&mode=design&t=Kq2EteWZB0vA6tMX-1",
    velog: "https://velog.io/@55555-jyeon/post-mobism",
    color: "#FF7482",
  },
  {
    title: "Manners Maketh Market",
    description:
      "강의 수강 후 프론트엔드 수강생 7명이 함께 진행한 중고마켓 사이트로 동료 개발자와 협업하며  배운 내용을 적용한  첫 프로젝트입니다. 페어 프로그래밍 기법을 도입해 팀 별 파트를 분배해 진행했으며 담당 페어의 리드를 맡았습니다.",
    src: "projects/01.svg",
    github: "https://github.com/Manners-Maketh-Market/MMM",
    figma:
      "https://www.figma.com/file/Tvg4qIZOhl4xkPTahFpgZn/MMM?type=design&node-id=0%3A1&mode=design&t=6x5Vzp15YKfOffyo-1",
    velog: "https://velog.io/@55555-jyeon/Manner-Makes-Market",
    color: "#100D45",
  },
];
