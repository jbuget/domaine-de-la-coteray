import React from "react"
import { RichText } from 'prismic-reactjs'
import Layout from "../components/layouts"
import FileList from '../components/slices/FileList'
import { graphql } from "gatsby"

export const query = graphql`
{
  prismic{
    allDocuments_pages(uid:null){
      edges{
        node{
          _meta{
            id
            type
          }
          title
          description
          body{
            ... on PRISMIC_Documents_pageBodyFile_list{
              type
              label
              primary{
                section_title
              }
              fields{
                file_name
                media_file{
                  __typename
                  ... on PRISMIC__FileLink{
                    name
                    url
                    size
                  }                
                }
              }
            }          
          }
        }
      }
    }
  }
}
`
export default ({ data }) => {
  // Define the Documents Page content returned from Prismic
  const doc = data.prismic.allDocuments_pages.edges.slice(0,1).pop();

  if(!doc) return null;

  return (
    <Layout>
      <div className="container" data-wio-id={ doc.node._meta.id }>
        <h1>{ RichText.asText(doc.node.title) }</h1>
        <p>{ RichText.asText(doc.node.description) }</p>
        {doc.node.body.map((slice, index) => {
          return <FileList slice={slice} key={ index }/>
        })}
      </div>
    </Layout>
  )
}
