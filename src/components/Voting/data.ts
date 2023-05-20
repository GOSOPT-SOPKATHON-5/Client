import { questionDTO } from '../../types';

const dataList: questionDTO = {
  status: 200,
  success: true,
  message: '질문 및 선택지 조회 성공',
  data: {
    receiverId: 1,
    receiverName: '남연우',
    question: '나는 이 사람과 OOOO 놀고 싶다',
    answers: [
      {
        id: 1,
        answer: '차안에서',
      },
      {
        id: 2,
        answer: '놀이공원에서',
      },
      {
        id: 3,
        answer: '솝트에서',
      },
      {
        id: 4,
        answer: '바닷가에서',
      },
    ],
  },
};

export const newData = {
  name: '김김김',
  question: '나는 이 사람과 OO에서 놀고 싶다.',
  option: ['차안에서', '놀이공원에서', '솝트에서', '바다에서'],
};

export default dataList;
