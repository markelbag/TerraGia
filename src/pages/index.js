import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CartProvider from "../components/store/CartProvider"

const IndexPage = () => (
  <CartProvider>
    <Layout>
      <Seo title="Home" />
      <h1 className="text-red-500">Hi people</h1>
    </Layout>
  </CartProvider>
)

export default IndexPage
