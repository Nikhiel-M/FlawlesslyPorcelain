import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home.jsx';
import  Header  from './Components/Header/Header.jsx';


const Router = () => {
  return (
   <BrowserRouter>
   < Header />
   <Routes>
    <Route path="/" element={<Home />} />
   </Routes>
   </BrowserRouter>
  )
}

export default Router