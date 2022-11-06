import { BrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <RootPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
