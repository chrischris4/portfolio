import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Kasa from './pages/Kasa';
import LeVieuxGrimoire from './pages/LeVieuxGrimoire';
import NinaCarducci from './pages/NinaCarducci';
import SophieBluel from './pages/SophieBluel';
import ContactForm from './components/ContactForm';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Kasa" element={<Kasa />} />
                <Route path="/SophieBluel" element={<SophieBluel />} />
                <Route path="/NinaCarducci" element={<NinaCarducci />} />
                <Route path="/LeVieuxGrimoire" element={<LeVieuxGrimoire />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
            <ContactForm />
            <Footer />
        </Router>
    );
}

export default App;
