import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './componets/detail';

import Header from './componets/header';
import Footer from './componets/footer';
import Content from './componets/content';
import Error from './componets/error';

function App() {
  return (
      <Router>
          <div>
              <Header />
              <Routes>
                  <Route exact path="/" element={<Content />} />
                  <Route path="/movie/:movieName" element={<MovieDetail />} />
                  <Route path="*" element={<Error />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
