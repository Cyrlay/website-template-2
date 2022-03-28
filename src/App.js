import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import News from "./components/News/News";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
      <div className={'App'}>
          <BrowserRouter>
              <Header/>
              <div className={'main-container'}>
                  <Routes>
                      <Route path={'/'} element={<Home/>}/>
                      <Route path={'/news'} element={<News/>}/>
                      <Route path={'/about-us'} element={<AboutUs/>}/>
                      <Route path={'*'} element={<PageNotFound/>}/>
                  </Routes>
              </div>
              <Footer/>
          </BrowserRouter>
      </div>
  )
}

export default App
