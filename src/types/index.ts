export interface landingDTO {}

export interface questionDTO {
  status: 200;
  success: true;
  message: '질문 및 선택지 조회 성공';
  data: {
    receiverId: 1;
    receiverName: '남연우';
    question: '나는 이 사람과 OOOO 놀고 싶다';
    answers: [
      {
        id: 1;
        answer: '차안에서';
      },
      {
        id: 2;
        answer: '놀이공원에서';
      },
      {
        id: 3;
        answer: '솝트에서';
      },
      {
        id: 4;
        answer: '바닷가에서';
      }
    ];
  };
}
export interface votingDTO {}
export interface detailMessageDTO {}
