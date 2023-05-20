import { NoteIcon } from '../../assets/icon';
import { styled } from 'styled-components';
function Message(props) {
  const { setModalOpen, keyword, time } = props;

  return (
    <St.MessageWrapper
      onClick={() => {
        setModalOpen(true);
      }}>
      <St.KeywordWrapper>
        <NoteIcon />
        <h3>{keyword}</h3>
      </St.KeywordWrapper>
      <small>{time}</small>
    </St.MessageWrapper>
  );
}

export default Message;

const St = {
  MessageWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.16);
    padding: 13px 22px;

    small {
      line-height: 22px;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
    }
  `,
  KeywordWrapper: styled.div`
    display: flex;
    align-items: center;

    h3 {
      margin-left: 19px;
      line-height: 22px;
      font-size: 18px;
      font-weight: 700;

      font-style: normal;
    }
  `,
};
