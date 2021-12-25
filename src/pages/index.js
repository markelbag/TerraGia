import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import { CartProvider } from "../components/store/CartContext"

export const query = graphql`
  query {
    setTable: file(relativePath: { eq: "setTable.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: CONSTRAINED
        )
      }
    }
    Tartine: file(relativePath: { eq: "Tartine.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: CONSTRAINED
        )
      }
    }
    burntOnion: file(relativePath: { eq: "burntOnion.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: CONSTRAINED
        )
      }
    }
    kimchi: file(relativePath: { eq: "kimchi.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    TGWellnessTea: file(relativePath: { eq: "TGWellnessTea.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    plantStock: file(relativePath: { eq: "plantStock.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    display: file(relativePath: { eq: "display.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    juices: file(relativePath: { eq: "juices.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
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
            spaceBetween={12}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: false }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-auto h-[720px] bg-[#EAE5DF] pl-12"
          >
            <SwiperSlide className="flex items-center justify-center">
              <GatsbyImage
                image={getImage(data.setTable)}
                className="w-full h-full"
                objectFit="cover"
              />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <GatsbyImage image={getImage(data.Tartine)} />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <GatsbyImage
                className="w-full h-full"
                image={getImage(data.burntOnion)}
              />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <GatsbyImage
                image={getImage(data.kimchi)}
                className="w-full h-full"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <GatsbyImage
                image={getImage(data.TGWellnessTea)}
                className="object-scale-down w-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <GatsbyImage image={getImage(data.plantStock)} />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <GatsbyImage image={getImage(data.display)} />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center">
              <GatsbyImage image={getImage(data.juices)} />
            </SwiperSlide>
          </Swiper>
        </div>
      </Layout>
    </CartProvider>
  )
}
export default IndexPage
