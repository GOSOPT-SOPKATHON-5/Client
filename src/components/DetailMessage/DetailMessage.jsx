import { styled } from 'styled-components';
import CommonViewPage from '../common/CommonViewPage';
import { ProfileIcon } from '../../assets/icon';
import { BackIcon } from '../../assets/icon';
import { ShareIcon } from '../../assets/icon';

function DetailMessage() {
  const dummy = {
    name: '심은서',
    question: '나는 이 사람과 # 에서 놀고 싶다',
    answer: '놀이공원',
  };

  return (
    <CommonViewPage>
      <St.UserProfileWrapper>
        <St.UserNameWrapper>
          <St.UserName>{dummy.name}</St.UserName>님과
        </St.UserNameWrapper>
        <St.OtherString>연결되는 오작교</St.OtherString>

        <ProfileIcon className="profileIcon" />

        <St.QuestionWrapper>
          <St.StringWrapper>
            <St.Question>{dummy.question.split('#')[0]}</St.Question>

            <St.AnswerWrapper>
              <St.Answer>{dummy.answer}</St.Answer>
              <St.Question>{dummy.question.split('#')[1]}</St.Question>
            </St.AnswerWrapper>
          </St.StringWrapper>
        </St.QuestionWrapper>
      </St.UserProfileWrapper>

      <St.BtnWrapper>
        <ShareIcon />
        <BackIcon />
      </St.BtnWrapper>
    </CommonViewPage>
  );
}

const St = {
  UserProfileWrapper: styled.div`
    display: grid;
    justify-content: center;

    font-size: 19px;
    font-weight: 500;
    margin-top: 111px;

    .profileIcon {
      position: absolute;
      top: 97px;
      right: 68px;
    }
  `,

  UserNameWrapper: styled.div`
    display: flex;
  `,
  UserName: styled.p`
    color: #5f52bb;
  `,
  OtherString: styled.p``,

  QuestionWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 23px;

    width: 298px;
    height: 180px;
    background: rgba(255, 255, 255, 0.49);
    border: 1px solid #ffffff;
    border-radius: 20px;

    font-size: 24px;
  `,

  StringWrapper: styled.div``,

  AnswerWrapper: styled.div`
    display: flex;
  `,
  Question: styled.p``,
  Answer: styled.p`
    color: #5f52bb;
  `,

  BtnWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    margin: 257px 36px 191px 46px;

    gap: 84px;
  `,
};

export default DetailMessage;
