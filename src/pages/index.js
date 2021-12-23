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
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    Tartine: file(relativePath: { eq: "Tartine.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    burntOnion: file(relativePath: { eq: "burntOnion.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    kimchi: file(relativePath: { eq: "kimchi.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    TGWellnessTea: file(relativePath: { eq: "TGWellnessTea.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    plantStock: file(relativePath: { eq: "plantStock.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    display: file(relativePath: { eq: "display.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    juices: file(relativePath: { eq: "juices.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
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
        <div className="h-auto m-8">
          <Seo title="Home" />
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: false }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-auto h-[720px]"
          >
            <SwiperSlide>
              <Img fluid={data.setTable.childImageSharp.fluid} alt="0" />
            </SwiperSlide>
            <SwiperSlide>
              <Img fluid={data.Tartine.childImageSharp.fluid} alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <Img fluid={data.burntOnion.childImageSharp.fluid} alt="2" />
            </SwiperSlide>
            <SwiperSlide>
              <Img fluid={data.kimchi.childImageSharp.fluid} alt="3" />
            </SwiperSlide>
            <SwiperSlide>
              <Img fluid={data.TGWellnessTea.childImageSharp.fluid} alt="4" />
            </SwiperSlide>
            <SwiperSlide>
              <Img fluid={data.plantStock.childImageSharp.fluid} alt="5" />
            </SwiperSlide>
            <SwiperSlide>
              <Img fluid={data.display.childImageSharp.fluid} alt="6" />
            </SwiperSlide>
            <SwiperSlide>
              <Img fluid={data.juices.childImageSharp.fluid} alt="7" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Layout>
    </CartProvider>
  )
}
export default IndexPage
