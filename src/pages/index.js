import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1 className="text-red-500">Hi people</h1>
  </Layout>
)

export default IndexPage
