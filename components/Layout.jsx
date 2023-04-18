import NavBar from "./NavBar"
import Footer from "./Footer"
const Layout = ({children}) => {
  return (
    
    <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <NavBar />
          {children}
          <Footer />
    </div>
     
  )
}

export default Layout


