import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import { CartProvider } from "../components/store/CartContext"
//import setTable from "../images/setTable.png"
//import Tartine from "../images/Tartine.png"
//import burntOnion from "../images/burntOnion.png"
//import kimchi from "../images/kimchi.png"
//import TGWellnessTea from "../images/TGWellnessTea.png"
//import plantStock from "../images/plantStock.png"
//import display from "../images/display.png"
//import juices from "../images/juices.png"

export const query = graphql`
  query {
    setTable: file(relativePath: { eq: "setTable.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    Tartine: file(relativePath: { eq: "Tartine.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    burntOnion: file(relativePath: { eq: "burntOnion.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kimchi: file(relativePath: { eq: "kimchi.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    TGWellnessTea: file(relativePath: { eq: "TGWellnessTea.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    plantStock: file(relativePath: { eq: "plantStock.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    display: file(relativePath: { eq: "display.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    juices: file(relativePath: { eq: "juices.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = props => {
  const data = useStaticQuery(query)

  return (
    <CartProvider>
      <Layout>
        <Seo title="Home" />
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Img fixed={data.setTable.childImageSharp.fixed} alt="0" />
          </SwiperSlide>
          <SwiperSlide>
            <Img fixed={data.Tartine.childImageSharp.fixed} alt="1" />
          </SwiperSlide>
          <SwiperSlide>
            <Img fixed={data.burntOnion.childImageSharp.fixed} alt="2" />
          </SwiperSlide>
          <SwiperSlide>
            <Img fixed={data.kimchi.childImageSharp.fixed} alt="3" />
          </SwiperSlide>
          <SwiperSlide>
            <Img fixed={data.TGWellnessTea.childImageSharp.fixed} alt="3" />
          </SwiperSlide>
          <SwiperSlide>
            <Img fixed={data.plantStock.childImageSharp.fixed} alt="3" />
          </SwiperSlide>
          <SwiperSlide>
            <Img fixed={data.display.childImageSharp.fixed} alt="3" />
          </SwiperSlide>
          <SwiperSlide>
            <Img fixed={data.juices.childImageSharp.fixed} alt="3" />
          </SwiperSlide>
        </Swiper>
      </Layout>
    </CartProvider>
  )
}
export default IndexPage
