import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

import { Routes,Route } from 'react-router-dom'
import PageNotFound from "../src/Pages/Pagenotfound";
import Recentlyviewed from "../src/Pages/Recentlyviewed"
import Storelocator from "../src/Pages/Storelocator";
import Banner from './Components/Banner'
import State from './Components/State'
import Rings from './Pages/Rings';
import Ringhover from './Pages/Ringhover';
import Formvalidation from './Formvalidation';
import Paragraph from './Components/Paragraph';
import Upperse from '../src/Components/Upperse';
import Changingname from './Components/Changingname';
  



function App() {
  return (
  <>
  {/* <Navbar/> */}
    {/* <Paragraph/> */}
  {/* <Formvalidation/> */}




<Routes>
<Route path="Uppercase" element={<Upperse />}/>
<Route path="Changename" element={<Changingname />}/>
        <Route path="/Form" element={<Formvalidation />}/>
        <Route path="/Home" element={<Banner />}/>
        <Route path="/Recentlyviewed" element={<Recentlyviewed />} />
        <Route path="/Storelocator" element={<Storelocator />} />
        <Route path="/Home" element={<Banner />} />
        <Route path="/State" element={<State />} />
        <Route path="/Ringhover" element={<Ringhover />} />
        <Route path='/Paragraph' element={<Paragraph/>}/>
        <Route path="/Ringsdetails" element={<Rings />} />
        <Route path="*" element={<PageNotFound />}>

          <Route path=":name" element={<PageNotFound />} />
        </Route>





</Routes>




  </>
  );
}

export default App;
