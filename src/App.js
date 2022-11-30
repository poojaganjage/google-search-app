import {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import RoutesLinks from './components/RoutesLinks';
import Footer from './components/Footer';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen'>
        <BrowserRouter>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <RoutesLinks />
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}
export default App;
