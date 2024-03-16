export type TProjectData = {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}[];

export const projects: TProjectData = [
  {
    title: "Manners Maketh Market",
    description:
      "Korea IT 학원 수강 후 수강생 7명이 모여 진행한 MMM은 온라인 중고 마켓 사이트 입니다. 페어 프로그래밍 기법을 토대로 약 1달 반동안 진행했습니다. 팀원들과 함께 들어가야 하는 기능들을 정리 후 프로젝트의 전반적인 디자인을 주도적으로 맡아 진행했습니다. 로그인/회원가입 로직부터 로그인한 유저와 관련된 작업을 전부 진행했습니다.",
    src: "project01.svg",
    link: "",
    color: "#100D45",
  },
  {
    title: "Chap Chap",
    description:
      "타입스크립트의 활용과 첫 프로젝트에서 부족하다고 느꼈던 협업에 가장 신경을 많이 쓴 토이 프로젝트입니다. 협업을 위해 PR template을 적극 활용해 꼼꼼하게 모든 코드를 리뷰하려고 노력했고 모든 팀원의 승인을 받도록 강제했습니다. git issue에 작성하는 데일리스크럼과 Linear 협업툴을 통해 전체적인 진행 속도와 개인이 blocking되는 부분을 확인했습니다.",
    src: "project02.svg",
    link: "",
    color: "#F7C544",
  },
  {
    title: "Post Mobism",
    description:
      "이전 프로젝트에서 부족했던 API 분석을 위해 sequence diagram을 그려보고 얘기를 나눠보는 시간을 가졌습니다. 구현 가능한 기능들을 나열 후 비슷한 기능을 나눠 다양한 기능 구현을 시도해 볼 수 있도록 분담했습니다. RHF과 RTK의 기본 세팅을 진행했습니다.",
    src: "project03.svg",
    link: "",
    color: "#FBCDB3",
  },
  {
    title: "Portfolio",
    description:
      "NextJS와 타입스크립트로 제작한 포트폴리오입니다. Framer Motion의 애니메이션을 적극 활용했습니다.",
    src: "project04.png",
    link: "",
    color: "#88A28D",
  },
  {
    title: "Mobigram",
    description:
      "NextJS를 공부하면서 제대로 이해했는지 활용해보기 위해 진행한 토이 프로젝트입니다.여태까지 배운 내용의 기능을 활용하기엔 SNS 페이지가 제격이라 판단해 인스타그램을 참고해 mobigram 디자인을 했습니다.",
    src: "project05.svg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#67B6FB",
  },
];
