import './styles/App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import EldenLore from './pages/EldenLore';
import TenCents from './pages/TenCents';
import MyAgenda from './pages/MyAgenda';
import Reptimorph from './pages/Reptimorph';
import Flun from './pages/Flun';

function App() {
    return (
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
                    <Route path="/MyAgenda" element={<MyAgenda />} />
                    <Route path="/Reptimorph" element={<Reptimorph />} />
                    <Route path="/TenCents" element={<TenCents />} />
                    <Route path="/EldenLore" element={<EldenLore />} />
                    <Route path="/Flun" element={<Flun />} />
                    <Route path="/*" element={<Error404 />} />
                </Routes>
                <Footer />
            </Router>
        </HelmetProvider>
    );
}

export default App;
