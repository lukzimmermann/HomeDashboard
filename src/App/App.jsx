import './App.css';
import ApartmentPage from '../Page/apartment.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DimmNurseryPage from '../Page/DimmNurseryPage/dimmNursery.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ApartmentPage />} />
        <Route path="meo" element={<DimmNurseryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
