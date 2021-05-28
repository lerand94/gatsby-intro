import * as React from "react"

import Layout from "../layout"
import Seo from "../seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { graphql } from 'gatsby'

const SinglePost = ({data}) => {
    const { html } = data.markdownRemark;
    const {title,image} = data.markdownRemark.frontmatter
    const img = getImage(image)

    return (
    <Layout>
        <Seo title={title} />
        <div>
            <h1>{title}</h1>
            <div>
                <GatsbyImage alt={title} image={img} />
            </div>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </div>
    </Layout>
)
}

export default SinglePost

export const query = graphql`
    query PostQuery($url: String) {
      markdownRemark(frontmatter: {category: {}, url: {eq: $url}}) {
        html
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 600)
        }
      }
    }
  }
}

`
