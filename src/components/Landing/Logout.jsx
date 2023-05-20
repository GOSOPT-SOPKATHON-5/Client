import { styled } from 'styled-components';

function Logout() {
  return (
    <St.LogoutWrapper>
      <button type="button">로그아웃하기</button>
    </St.LogoutWrapper>
  );
}

export default Logout;

const St = {
  LogoutWrapper: styled.div`
    text-align: center;
    display: flex;
    justify-content: center;

    button {
      background: rgba(22, 21, 26, 0.33);

      padding: 7px 18px;
      margin: 64px 0;
      width: max-content;
      border: none;
      color: white;
      border-radius: 68px;
      cursor: pointer;

      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
    }
  `,
};
