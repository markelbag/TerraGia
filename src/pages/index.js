import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

import { CartProvider } from "../components/store/CartContext"
import setTable from "../images/setTable.png"
import Tartine from "../images/Tartine.png"
import burntOnion from "../images/burntOnion.png"
import kimchi from "../images/kimchi.png"
import TGWellnessTea from "../images/TGWellnessTea.png"
import plantStock from "../images/plantStock.png"
import display from "../images/display.png"
import juices from "../images/juices.png"

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>
//         <div className="w-24 h-24 bg-gray-100"></div>
//         </SwiperSlide>
//     </Swiper>
//   );
// };

const IndexPage = props => {
  return (
    <CartProvider>
      <Layout>
        <Seo title="Home" />
        <div className="flex items-center justify-center w-full h-full bg-gray-300">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
          >
            <SwiperSlide>
              <img src={setTable} alt=" 0" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Tartine} alt=" 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Tartine} alt=" 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={burntOnion} alt=" 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={juices} alt=" 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={kimchi} alt=" 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={TGWellnessTea} alt=" 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={plantStock} alt=" 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={display} alt=" 7" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Layout>
    </CartProvider>
  )
}
export default IndexPage
