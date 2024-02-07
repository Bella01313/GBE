import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard'
import Proudcts from './components/Proudcts';
import Topbar from './components/shared/Topbar';
function App() {
  return (
    <Router>
      {/* <Topbar/> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Dashboard/>}/>
         <Route path="products" element={<Proudcts/>}/>
         </Route>
         <Route path="login" element={<div>this is login page</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
