
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const RoutesComponent = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* Añadir más rutas si es necesario */}
        </Routes>
    </Router>
);

export default RoutesComponent;