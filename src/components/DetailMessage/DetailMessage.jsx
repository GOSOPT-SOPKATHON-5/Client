import { styled } from 'styled-components';
import CommonViewPage from '../common/CommonViewPage';
import { MessageIcon } from '../../assets/icon';
import { LogoIcon } from '../../assets/icon';
import { useNavigate, useParams } from 'react-router-dom';
import { GOHome } from '../../assets/icon';

function DetailMessage() {
  const dummy = {
    name: '심은서',
    question: '나는 이 사람과 # 에서 놀고 싶다',
    answer: '놀이공원',
    point: 6,
  };

  let { reviewFlag } = useParams();

  const navigate = useNavigate();

  return (
    <CommonViewPage
      style={{
        background: 'radial-gradient(123.06% 123.06% at 50% 123.06%, #ffffff 0%, #8cacff 25%, #16151a 89.58%)',
        overflowY: 'hidden',
      }}>
      <St.UserProfileWrapper>
        <St.UserNameWrapper>
          <St.UserName>{dummy.name}</St.UserName>님의 새벽을 연결했어요.
        </St.UserNameWrapper>

        <St.PointWrapper>
          <St.Point>현재 포인트 </St.Point>
          <St.CurrentPoint>{dummy.point}</St.CurrentPoint>
          <St.Other>P</St.Other>
        </St.PointWrapper>
      </St.UserProfileWrapper>

      <St.LogoWrapper>
        <LogoIcon className="logo" />
      </St.LogoWrapper>

      <St.BtnWrapper>
        {reviewFlag === ':true' ? (
          <></>
        ) : (
          <GOHome
            onClick={() => {
              navigate('/');
            }}
          />
        )}
        <MessageIcon className="message" />
      </St.BtnWrapper>
    </CommonViewPage>
  );
}

const St = {
  UserProfileWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 134px;
  `,

  PointWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 23px;

    width: 123px;
    height: 32px;

    background: rgba(255, 255, 255, 0.16);
    border: 0.5px solid #ffffff;
    border-radius: 64px;
    gap: 7px;
  `,
  Point: styled.p`
    font-size: 14px;
  `,
  CurrentPoint: styled.p`
    font-weight: 800;
    font-size: 20px;
    line-height: 22px;
    color: #8cacff;
  `,

  Other: styled.p`
    font-weight: 800;
    font-size: 20px;
    line-height: 22px;
    margin-left: -5px;
  `,

  LogoWrapper: styled.div`
    margin-top: 84px;

    .logo {
      width: 370px;
    }
  `,

  UserNameWrapper: styled.div`
    display: flex;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
  `,
  UserName: styled.p`
    color: #5f52bb;
  `,

  BtnWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    margin: 55px 20px 48px 24px;
  `,
};

export default DetailMessage;
