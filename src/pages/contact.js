import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import MyGatsbyComponents from "https://framer.com/m/MyGatsbyComponents-5DYP.js@LqKADTMPOGSJ979Cr8iE"
export const query = graphql`
  query {
    buildYourOwn: file(relativePath: { eq: "buildYourOwn.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          layout: CONSTRAINED
        )
      }
    }}`
const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    {/* <MyGatsbyComponents /> */}
    <Example />
  </Layout>
)

export default Contact

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          purple: colors.purple,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/



export function Example() {
  const data = useStaticQuery(query)
  return (
    <div>
      <main>
        {/* Header */}
        <div className="py-8 gray-50 sm:py-4">
          <div className="max-w-md pl-4 pr-8 mx-auto sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-xl leading-normal text-center text-gray-500">
              Send us a message or visit us in person at 100 main street, in Nashua, NH!
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative ">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <GatsbyImage  className="object-cover w-full h-56 lg:absolute lg:h-full" image={getImage(data.buildYourOwn)} />
            </div>
          </div>
          <div className="relative px-4 py-16 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <form
                  action="mailto:contact@shopterragia.com"
                  method="POST"
                  enctype="multipart/form-data"
                  name="EmailForm"
                  className="grid grid-cols-1 mt-9 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <span
                        id="phone-description"
                        className="text-sm text-gray-500"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="how-can-we-help"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How can we help you?
                      </label>
                      <span
                        id="how-can-we-help-description"
                        className="text-sm text-gray-500"
                      >
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-purple-500 focus:border-purple-500"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                 
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="how-did-you-hear-about-us"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How did you hear about us?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="how-did-you-hear-about-us"
                        id="how-did-you-hear-about-us"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#5AA295] border border-transparent rounded-md shadow-sm"
                    >
                      Submit
                    </button>
                    {/* <form
                      action="mailto:contact@yourdomain.com"
                      method="POST"
                      enctype="multipart/form-data"
                      name="EmailForm"
                    >
                      <label>
                        Name:
                        <input type="text" size="19" name="Contact-Name" />
                      </label>
                      <label>
                        Email:
                        <input type="email" name="Contact-Email" />
                      </label>
                      <label>
                        Message:
                        <textarea
                          name="Contact-Message"
                          rows="6"
                          cols="20"
                        ></textarea>
                      </label>

                      <button type="submit" value="Submit">
                        Send
                      </button>
                    </form> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
