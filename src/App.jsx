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
import ContactForm from './components/ContactForm';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="https://chrischris4.github.io/p8/" element={<Home />} />
                <Route path="https://chrischris4.github.io/p8/Booki" element={<Booki />} />
                <Route path="https://chrischris4.github.io/p8/Kasa" element={<Kasa />} />
                <Route path="https://chrischris4.github.io/p8/SophieBluel" element={<SophieBluel />} />
                <Route path="https://chrischris4.github.io/p8/NinaCarducci" element={<NinaCarducci />} />
                <Route
                    path="https://chrischris4.github.io/p8/MonVieuxGrimoire"
                    element={<MonVieuxGrimoire />}
                />
                <Route path="https://chrischris4.github.io/p8/*" element={<Error404 />} />
            </Routes>
            <ContactForm />
            <Footer />
        </Router>
    );
}

export default App;
