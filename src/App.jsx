import './styles/App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Booki from './pages/Booki';
import EldenLore from './pages/EldenLore';
import TenCents from './pages/TenCents';
import Kasa from './pages/Kasa';
import MonVieuxGrimoire from './pages/MonVieuxGrimoire';
import MyAgenda from './pages/MyAgenda';
import NinaCarducci from './pages/NinaCarducci';
import SophieBluel from './pages/SophieBluel';
import ThemeSombre from './components/ThemeSombre';

function App() {
    return (
        <ThemeSombre>
            <HelmetProvider>
                <Router>
                    <Helmet>
                        <link
                            rel="sitemap"
                            type="application/xml"
                            title="Sitemap"
                            href="/sitemap.xml"
                        />
                    </Helmet>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Booki" element={<Booki />} />
                        <Route path="/MyAgenda" element={<MyAgenda />} />
                        <Route path="/Kasa" element={<Kasa />} />
                        <Route path="/TenCents" element={<TenCents />} />
                        <Route path="/EldenLore" element={<EldenLore />} />
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
