import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from '../../pages/Landing';
import Voting from '../../pages/Voting';
import DetailMessage from '../../pages/DetailMessage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/vote" element={<Voting />} />
        <Route path="/detailmessage" element={<DetailMessage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
