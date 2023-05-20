import { styled } from 'styled-components';
import CommonViewPage from '../common/CommonViewPage';
import { ProfileImg } from '../../assets/icon';
import { BackIcon } from '../../assets/icon';
import { ShareIcon } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';

function Result() {
  const dummy = {
    user: '남연우',
    guest: '김효원',
    question: '나는 #와 #도시락 먹으면서 놀고 싶다',
    answer: '차 안에서',
  };

  const navigate = useNavigate();

  return (
    <CommonViewPage
      style={{
        background: 'radial-gradient(123.06% 123.06% at 50% 123.06%, #FFFFFF 0%, #8CACFF 35.42%, #16151A 89.58%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}>
      <St.UserWrapper>
        <St.SentenceWrapper>
          <St.UserName>{dummy.guest}</St.UserName>
          <St.Description>님이 깨워준</St.Description>
        </St.SentenceWrapper>
        <St.SentenceWrapper>
          <St.UserName>{dummy.user}</St.UserName>
          <St.Description>님의 새벽</St.Description>
        </St.SentenceWrapper>
        <ProfileImg className="profileImg" />
      </St.UserWrapper>

      <St.ResultWrapper>
        <St.ResultContents>
          <St.TextWrapper>
            <St.EachContent>{dummy.question.split('#')[0]} </St.EachContent>
            <St.GuestData> {dummy.user}</St.GuestData>
            <St.EachContent>{dummy.question.split('#')[1]} </St.EachContent>
          </St.TextWrapper>

          <St.AnswerData>{dummy.answer}</St.AnswerData>

          <St.BottomWrapper>
            <St.EachContent>{dummy.question.split('#')[2]} </St.EachContent>
          </St.BottomWrapper>
        </St.ResultContents>
      </St.ResultWrapper>

      <St.BtnWrapper>
        <BackIcon
          onClick={() => {
            navigate('/');
          }}
        />
        <ShareIcon />
      </St.BtnWrapper>
    </CommonViewPage>
  );
}

const St = {
  UserWrapper: styled.section`
    display: flex;
    flex-direction: column;

    margin-top: 49px;
    margin-left: 28px;
    margin-right: 28px;

    font-weight: 700;
    font-size: 24px;
    line-height: 22px;

    .profileImg {
      margin-top: -45px;
      margin-left: 265px;
    }
  `,
  SentenceWrapper: styled.article`
    display: flex;
  `,
  UserName: styled.p`
    color: #8cacff;
  `,
  Description: styled.p``,

  ResultWrapper: styled.section`
    display: flex;
    justify-content: center;
    margin-top: 47px;

    font-weight: 700;
    font-size: 44px;
    line-height: 42px;
  `,

  ResultContents: styled.article`
    display: flex;

    flex-wrap: wrap;

    width: 324px;
    height: 397px;

    background: rgba(255, 255, 255, 0.09);
    border-radius: 12px;

    font-size: 44px;
  `,

  TextWrapper: styled.div`
    display: flex;
    margin-top: 33px;
    margin-left: 25px;
  `,

  EachContent: styled.p``,

  GuestData: styled.p`
    margin-left: 10px;
    color: #8cacff;
  `,

  AnswerData: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 235px;
    height: 70px;

    margin-left: 69px;
    margin-top: -20px;

    background: #16151a;

    border: 1.93997px solid #8cacff;
    box-shadow: 0px 0px 23.9884px #8c91ff;
    border-radius: 101px;
  `,

  BottomWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 30px;
    margin-top: -20px;
  `,

  BtnWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    margin: 55px 20px 48px 24px;
  `,
};

export default Result;
