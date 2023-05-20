import { styled } from 'styled-components';
import CommonViewPage from '../common/CommonViewPage';
// import { ProfileImg } from '../../assets/icon';
import { GOHome } from '../../assets/icon';
import { ShareIcon } from '../../assets/icon';

function Result() {
  return (
    <CommonViewPage
      style={{
        background: 'radial-gradient(123.06% 123.06% at 50% 123.06%, #FFFFFF 0%, #8CACFF 35.42%, #16151A 89.58%)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}>
      <St.UserWrapper>
        <St.SentenceWrapper>
          <St.UserName>김효원</St.UserName>
          <St.Description>님이 깨워준</St.Description>
        </St.SentenceWrapper>
        <St.SentenceWrapper>
          <St.UserName>남연우</St.UserName>
          <St.Description>님의 새벽</St.Description>
        </St.SentenceWrapper>
        {/* <ProfileImg /> */}
      </St.UserWrapper>

      <St.ResultWrapper>
        <St.ResultContents></St.ResultContents>
      </St.ResultWrapper>

      <St.BtnWrapper>
        <GOHome
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
  `,

  ResultContents: styled.article`
    display: flex;

    box-sizing: border-box;

    width: 324px;
    height: 397px;

    background: rgba(255, 255, 255, 0.09);
    border-radius: 12px;
  `,

  BtnWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    margin: 55px 20px 48px 24px;
  `,
};

export default Result;
