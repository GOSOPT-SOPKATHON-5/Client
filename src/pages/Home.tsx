import { SampleIcon } from '../../public/assets/icon';
//이 파일은 지워주세요!
import { styled } from 'styled-components';

const Home = () => {
  return (
    <St.HomeWrapper>
      <img src={SampleIcon}></img>
      <h1>솝커톤 5조 최고</h1>
    </St.HomeWrapper>
  );
};

export default Home;

const St = {
  HomeWrapper: styled.div`
    ${({ theme }) => theme.fonts.test_h1}
    color : ${({ theme }) => theme.colors.test_blue};
  `,
};
