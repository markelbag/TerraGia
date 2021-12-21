import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "react-slick"
import { CartProvider } from "../components/store/CartContext"
import setTable from "../images/setTable.png"
import Tartine from "../images/Tartine.png"
import burntOnion from "../images/burntOnion.png"
import kimchi from "../images/kimchi.png"
import TGWellnessTea from "../images/TGWellnessTea.png"
import plantStock from "../images/plantStock.png"
import display from "../images/display.png"
import juices from "../images/juices.png"



const IndexPage = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    vertical: false
} 
return (
  <CartProvider>
    <Layout>
      <Seo title="Home" />
      <Slider {...settings}>
        <div><img src={setTable} alt=" 0" /></div>
          <div><img src={Tartine} alt=" 1" /></div>
        <div><img src={burntOnion} alt=" 2" /></div>
         <div><img src={juices} alt=" 3" /></div>
          <div><img src={kimchi} alt=" 4" /></div>
          <div><img src={TGWellnessTea} alt=" 5" /></div>
          <div><img src={plantStock} alt=" 6" /></div>
          <div><img src={display} alt=" 7" /></div>
        </Slider>
    </Layout>
  </CartProvider>
)
}
export default IndexPage
