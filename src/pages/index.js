import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import CartProvider from "../components/store/CartProvider"
import setTable from "../images/setTable.png"
import Tartine from "../images/Tartine.png"
import burntOnion from "../images/burntOnion.png"
import kimchi from "../images/kimchi.png"
import TGWellnessTea from "../images/TGWellnessTea.png"
import plantStock from "../images/plantStock.png"
import display from "../images/display.png"
import juices from "../images/juices.png"
const IndexPage = () => (
  <CartProvider>
    <Layout>
      <Seo title="Home" />
      <div className="flex w-full justify-center">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={7}
        interval={2000}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}><img src={setTable} alt=" 0" /></Slide>
          <Slide index={1}><img src={Tartine} alt=" 1" /></Slide>
          <Slide index={2}><img src={burntOnion} alt=" 2" /></Slide>
          <Slide index={2}><img src={juices} alt=" 3" /></Slide>
          <Slide index={3}><img src={kimchi} alt=" 4" /></Slide>
          <Slide index={4}><img src={TGWellnessTea} alt=" 5" /></Slide>
          <Slide index={5}><img src={plantStock} alt=" 6" /></Slide>
          <Slide index={6}><img src={display} alt=" 7" /></Slide>
        </Slider>
      </CarouselProvider>
       
      </div>
    </Layout>
  </CartProvider>
)

export default IndexPage
