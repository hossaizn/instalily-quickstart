import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ApplicationHub from './pages/ApplicationHub';
import Quickstart from './pages/Quickstart';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<ApplicationHub />} />
        <Route path="/quickstart" element={<Quickstart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
