import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Page1 from './Components/Home(Page-1)/Page1';
import Page2 from './Components/About-Us(Page-2)/Page2';
import Page3 from './Components/Contact-Us(Page-3)/Page3';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  const renderMainPage = () => {
    switch (currentPage) {
      case 'main':
        return <Page1 />;
      case 'subpage2':
        return <Page2 />;
      case 'subpage3':
        return <Page3 />;
      default:
        return <Page1 />;
    }
  };

 return (
  <Router>
    <nav className='navMain'>
      <Link to="/">Home</Link>
      <Link to="/page2">About Us</Link>
      <Link to="/page3">Contact Us</Link>
    </nav>

    <Routes>
      <Route path="/" element={renderMainPage()} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  </Router>
);
}

export default App;
