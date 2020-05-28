import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"
import CallToAction from "../components/cta"
import Feature from "../components/feature"
import Feature2 from "../components/feature2"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <Content />
    <Feature />
    <Feature2 />
    <CallToAction />
  </Layout>
)

export default IndexPage
