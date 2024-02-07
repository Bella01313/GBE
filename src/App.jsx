import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard'
import Proudcts from './components/Proudcts';
import Topbar from './components/shared/Topbar';
import Aboutus from './pages/Aboutus';
import About from './pages/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Dashboard/>}/>
         <Route path="products" element={<Proudcts/>}/>
         </Route>
         <Route path='/topbar' element={<Topbar />} />
         <Route path='/aboutus' element={<Aboutus/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path="login" element={<div>this is login page</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
