import { ReactComponent as UserProfile } from '../../assets/images/user_profile.svg';
import { styled } from 'styled-components';

function LandingProfile(props) {
  const { userName, userPoint } = props;

  return (
    <St.LandingProfileWrapper>
      <St.ContentsWrapper>
        <p>
          <h1>
            <span className="blue">{userName}</span>님,
          </h1>
          <br />
          <h2>새벽을 깨우는 쪽지가 도착했어요.</h2>
        </p>
        <span className="point">
          포인트
          <strong>
            <span className="blue">{userPoint}</span>P
          </strong>
        </span>
      </St.ContentsWrapper>
    </St.LandingProfileWrapper>
  );
}

export default LandingProfile;

const St = {
  LandingProfileWrapper: styled.div`
    display: flex;
    margin-top: 40px;

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 22px;
    }

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
    }
  `,
  ContentsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 12px;

    .blue {
      color: #8cacff;
    }

    .point {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 5px 9px;
      width: max-content;
      border-radius: 64px;
      border: 0.5px solid #ffffff;

      background: rgba(255, 255, 255, 0.31);
      border: 0.5px solid #ffffff;
      border-radius: 64px;

      margin-top: 17px;

      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;

      & > strong {
        margin-left: 7px;

        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 22px;
      }
    }
  `,
};
