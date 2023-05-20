import { useEffect, useState } from 'react';
import CommonViewPage from '../common/CommonViewPage';
import IndivCardList from './IndivCardList';
import ProgressBar from './ProgressBar';
import client from '../../api/axios';
import Modal from '../common/VoteModal';
import ModalPortal from '../common/ModalPortal';
import { useNavigate } from 'react-router-dom';

function index({ reviewFlag }) {
  const [count, setCount] = useState(1);
  const [shuffle, setShuffle] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify({ results: [] }));
  }, []);

  const onClick = (e) => {
    setCount((prev) => prev + 1);
    if (count === 3) {
      const postData = JSON.parse(localStorage.getItem('results'));
      setModalOpen((prev) => !prev);
      console.log(postData);
      client.post('/', postData);
      reviewFlag === '' ? navigate('/') : navigate('/detailMessage');
    }
  };

  const handleShuffle = (e) => {
    setShuffle((prev) => prev + 1);
  };

  return (
    <CommonViewPage
      style={{
        background:
          count === 1
            ? 'radial-gradient(123.06% 123.06% at 50% 123.06%, #FFFFFF 0%, #8CACFF 25%, #16151A 89.58%)'
            : count === 2
            ? 'radial-gradient(199.87% 194.55% at 109.87% 109.24%, #FFFFFF 0%, #8CACFF 35.42%, #16151A 100%)'
            : 'radial-gradient(138.89% 138.89% at 70.9% 107.23%, #FFFFFF 0%, #FFFFFF 0.01%, #8CACFF 80.21%, #8CACFF 99.99%)',
      }}>
      <ProgressBar progress={count} shuffle={shuffle} setShuffle={handleShuffle} />
      <IndivCardList count={count} setCount={onClick} />
      {modalOpen && (
        <ModalPortal>
          <Modal />
        </ModalPortal>
      )}
    </CommonViewPage>
  );
}

export default index;
