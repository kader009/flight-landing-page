import BannerSection from './components/Banner'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import TabGallery from './components/TabGallery'

const App = () => {
  return (
    <div>
      <Header/>
      <BannerSection/>
      <Carousel/>
      <TabGallery/>
      <Footer/>
    </div>
  )
}

export default App