import { Routes, Route } from 'react-router-dom';
import { Start } from './pages/Start/Start';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
      </Routes>
    </div>
  );
}

export default App;
