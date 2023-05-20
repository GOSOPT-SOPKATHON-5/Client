import { useState } from 'react';
import CommonViewPage from '../common/CommonViewPage';
import IndivCardList from './IndivCardList';
import ProgressBar from './ProgressBar';

function index() {
  const [count, setCount] = useState(1);
  const [shuffle, setShuffle] = useState(0);

  const onClick = () => {
    setCount((prev) => prev + 1);
    localStorage.setItem(count);
  };

  return (
    <CommonViewPage>
      <ProgressBar progress={count} />
      <IndivCardList count={count} setCount={onClick} />
    </CommonViewPage>
  );
}

export default index;
