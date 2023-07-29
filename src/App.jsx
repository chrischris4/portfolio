import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Booki from './pages/Booki';
import Kasa from './pages/Kasa';
import MonVieuxGrimoire from './pages/MonVieuxGrimoire';
import NinaCarducci from './pages/NinaCarducci';
import SophieBluel from './pages/SophieBluel';

function App() {
    return (
        <Router basename="/p8">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Booki" element={<Booki />} />
                <Route path="/Kasa" element={<Kasa />} />
                <Route path="/SophieBluel" element={<SophieBluel />} />
                <Route path="/NinaCarducci" element={<NinaCarducci />} />
                <Route
                    path="/MonVieuxGrimoire"
                    element={<MonVieuxGrimoire />}
                />
                <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
