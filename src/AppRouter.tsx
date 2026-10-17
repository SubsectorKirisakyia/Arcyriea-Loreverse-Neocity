import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import LibraryHome from './pages/LibraryHome';
import Characters from './pages/Characters';
import Factions from './pages/Factions';
import Races from './pages/Races';
import Partners from './pages/Partners';

export default function AppRouter(): React.JSX.Element {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LibraryHome />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/factions" element={<Factions />} />
        <Route path="/races" element={<Races />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </HashRouter>
  );
}
