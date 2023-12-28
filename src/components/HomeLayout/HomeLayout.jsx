import Header from "../Header/Header"
// import Loader from "../Loader/loader"
import Footer from "../Footer/Footer"

function HomeLayout({children}) {
  return (
    <div>
    <Header/>
    {children}
    <Footer/>
      
    </div>
  )
}

export default HomeLayout
