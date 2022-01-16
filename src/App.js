import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TemplateDefault from './Templates/Default'

import Home from './Pages/Home'
import Users from './Pages/Users'
import Error from  './Pages/Error'

function App() {
  return (
    <TemplateDefault>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Users' element={<Users />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </TemplateDefault>
  );
}

export default App;