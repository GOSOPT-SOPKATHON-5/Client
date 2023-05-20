import { LogoIcon } from '../../assets/icon';
import { styled } from 'styled-components';

function LandingHeader() {
  return (
    <St.LandingHeaderWrapper>
      <LogoIcon />
    </St.LandingHeaderWrapper>
  );
}

export default LandingHeader;

const St = {
  LandingHeaderWrapper: styled.div`
    margin-top: 39px;
    padding: 0 12px;
    width: 375px;
    display: flex;
    align-items: center;
  `,
};
