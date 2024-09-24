import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useSelector } from 'react-redux';

const Layout = () => {

  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (

    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen`}>
    <div className="bg-gray-200 dark:bg-black text-black dark:text-white min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </div>
  )
}

export default Layout
