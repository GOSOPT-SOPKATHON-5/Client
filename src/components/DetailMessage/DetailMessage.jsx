import { useNavigate, useParams } from 'react-router-dom';

import { BackIcon } from '../../assets/icon';
import CommonViewPage from '../common/CommonViewPage';
import { GOHome } from '../../assets/icon';
import { MessageIcon } from '../../assets/icon';
import { ProfileIcon } from '../../assets/icon';
import { ShareIcon } from '../../assets/icon';
import { SmallLogoIcon } from '../../assets/icon';
import { styled } from 'styled-components';
import { MessageIcon2 } from '../../assets/icon';

function DetailMessage() {
  const dummy = {
    name: '심은서',
    question: '나는 이 사람과 # 에서 놀고 싶다',
    answer: '놀이공원',
    point: 6,
  };

  const { reviewFlag } = useParams();
  const flag = reviewFlag === 'true' ? true : false;
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
        <SmallLogoIcon className="logo" />
      </St.LogoWrapper>

      <St.BtnWrapper>
        {flag === true ? (
          <MessageIcon2
            className="message"
            onClick={() => {
              navigate('/result');
            }}
          />
        ) : (
          <GOHome
            onClick={() => {
              navigate('/');
            }}
          />
        )}
      </St.BtnWrapper>
    </CommonViewPage>
  );
}

const St = {
  UserProfileWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  `,

  PointWrapper: styled.div`
    display: flex;
    gap: 7px;
    align-items: center;
    justify-content: center;
    margin-top: 23px;
    border: 0.5px solid #ffffff;
    border-radius: 64px;

    background: rgba(255, 255, 255, 0.16);

    width: 123px;
    height: 32px;
  `,
  Point: styled.p`
    font-size: 14px;
  `,
  CurrentPoint: styled.p`
    line-height: 22px;
    color: #8cacff;
    font-size: 20px;
    font-weight: 800;
  `,

  Other: styled.p`
    margin-left: -5px;
    line-height: 22px;
    font-size: 20px;
    font-weight: 800;
  `,

  LogoWrapper: styled.div`
    margin-top: 84px;

    .logo {
      width: 370px;
    }
  `,

  UserNameWrapper: styled.div`
    display: flex;
    line-height: 22px;
    font-size: 24px;
    font-weight: 700;
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
