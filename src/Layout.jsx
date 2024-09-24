import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useSelector } from 'react-redux';
// import { SlideShow } from './components/Hero Section/SlideShow';
// import ProductSlide from './components/Products/ProductSlide.jsx';


const Layout = () => {

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (

    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen`}>
    {/* Apply dark mode styles */}
    <div className="bg-gray-200 dark:bg-black text-black dark:text-white min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </div>
  )
}

export default Layout
