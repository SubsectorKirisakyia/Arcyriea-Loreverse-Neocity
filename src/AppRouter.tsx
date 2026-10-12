import { HashRouter, Routes, Route } from 'react-router-dom';
import LibraryHome from './pages/LibraryHome';
import Characters from './pages/Characters';

export default function AppRouter(): React.JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LibraryHome />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </HashRouter>
  );
}
