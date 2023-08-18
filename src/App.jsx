import './styles/App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Booki from './pages/Booki';
import Kasa from './pages/Kasa';
import MonVieuxGrimoire from './pages/MonVieuxGrimoire';
import NinaCarducci from './pages/NinaCarducci';
import SophieBluel from './pages/SophieBluel';
import ThemeSombre from './components/ThemeSombre';

function App() {
    return (
        <ThemeSombre>
            <HelmetProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Booki" element={<Booki />} />
                        <Route path="/Kasa" element={<Kasa />} />
                        <Route path="/SophieBluel" element={<SophieBluel />} />
                        <Route
                            path="/NinaCarducci"
                            element={<NinaCarducci />}
                        />
                        <Route
                            path="/MonVieuxGrimoire"
                            element={<MonVieuxGrimoire />}
                        />
                        <Route path="/*" element={<Error404 />} />
                    </Routes>
                    <Footer />
                </Router>
            </HelmetProvider>
        </ThemeSombre>
    );
}

export default App;
