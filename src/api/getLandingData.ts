export default interface landingDTO {
  code: 200;
  message: '조회 성공하였습니다.';
  data: {
    userName: '박현정';
    userPoint: 1;
    userAnswers: [
      {
        id: 1;
        answer: '차안에서';
        createdAt: '2020.02.01';
      },
      {
        id: 2;
        answer: '달빛산책';
        createdAt: '2020.02.01';
      }
    ];
  };
}
