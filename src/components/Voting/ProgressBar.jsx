import { styled } from 'styled-components';
import { ReactComponent as RightArrow } from '../../assets/icon/icon.svg';

function ProgressBar({ progress, shuffle, setShuffle }) {
  return (
    <>
      <St.ProgressLine progress={progress} />
      <St.ProgressAndShuffle>
        <St.ProgressIndicator>{progress}/3</St.ProgressIndicator>
        <St.ShuffleIndicator shuffle={shuffle} onClick={(e) => setShuffle(e)}>
          셔플 {shuffle}/3
          <RightArrow />
        </St.ShuffleIndicator>
      </St.ProgressAndShuffle>
    </>
  );
}

export default ProgressBar;

const St = {
  ProgressLine: styled.div`
    transition-duration: 0.3s;
    border: 3px solid #fff;
    width: calc(100% / (4 - ${({ progress }) => progress}));
    height: 0;
  `,
  ProgressAndShuffle: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
  `,
  ProgressIndicator: styled.span`
    margin-left: 20px;
    color: #fff;
    font-size: 14px;
  `,
  ShuffleIndicator: styled.span`
    opacity: ${({ shuffle }) => (shuffle === 3 ? '0.65' : '1')};
    margin-right: 20px;
    color: #fff;
    font-size: 14px;
    svg {
      margin-left: 10px;
    }
  `,
};
