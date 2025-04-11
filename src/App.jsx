import BannerSection from './components/Banner'
import RokomCarousel from './components/Carousel'
import Header from './components/Header'
import TabGallery from './components/TabGallery'

const App = () => {
  return (
    <div>
      <Header/>
      <BannerSection/>
      <RokomCarousel/>
      <TabGallery/>
    </div>
  )
}

export default App