import BannerSection from './components/Banner'
import RokomCarousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import TabGallery from './components/TabGallery'

const App = () => {
  return (
    <div>
      <Header/>
      <BannerSection/>
      <RokomCarousel/>
      <TabGallery/>
      <Footer/>
    </div>
  )
}

export default App