import { useEffect, useState } from 'react';
import CommonViewPage from '../common/CommonViewPage';
import IndivCardList from './IndivCardList';
import ProgressBar from './ProgressBar';
import client from '../../api/axios';

function index() {
  const [count, setCount] = useState(1);
  const [shuffle, setShuffle] = useState(0);

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify({ results: [] }));
  }, []);

  const onClick = (e) => {
    setCount((prev) => prev + 1);
    if (count === 3) {
      const postData = JSON.parse(localStorage.getItem('results'));
      console.log(postData);
      client.post('/', postData);
    }
  };

  const handleShuffle = (e) => {
    setShuffle((prev) => prev + 1);
  };

  return (
    <CommonViewPage>
      <ProgressBar progress={count} shuffle={shuffle} setShuffle={handleShuffle} />
      <IndivCardList count={count} setCount={onClick} />
    </CommonViewPage>
  );
}

export default index;
