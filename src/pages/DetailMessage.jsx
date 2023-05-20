import DetailMessagePage from '../components/DetailMessage/DetailMessage';
import Modal from '../components/common/DetailModal';
import ModalPortal from '../components/common/ModalPortal';
import { useState } from 'react';

function DetailMessage() {
  const [modalOn, setModalOn] = useState(true);

  return (
    <>
      <DetailMessagePage />
      {modalOn && (
        <ModalPortal>
          <Modal onClose={() => setModalOn(false)} />
        </ModalPortal>
      )}
    </>
  );
}

export default DetailMessage;
