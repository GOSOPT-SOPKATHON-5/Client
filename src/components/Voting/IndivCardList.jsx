import { styled } from 'styled-components';
import IndivCard from './IndivCard';

function IndivCardList({ count, setCount }) {
  const XCount = count === 1 ? '314' : count === 2 ? '0' : '-314';
  return (
    <St.IndivCardWrapperList XCount={XCount}>
      <IndivCard setCount={setCount} />
      <IndivCard setCount={setCount} />
      <IndivCard setCount={setCount} />
    </St.IndivCardWrapperList>
  );
}

export default IndivCardList;

const St = {
  IndivCardWrapperList: styled.section`
    display: flex;
    gap: 19px;
    align-items: center;
    justify-content: center;
    transform: translateX(${({ XCount }) => XCount}px);
    transition-duration: 0.3s;
    margin-top: 49px;
    width: 100%;
    height: 491px;
  `,
};
