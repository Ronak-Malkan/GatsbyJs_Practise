import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }) => {
   return (
      <Layout pageTitle={data.mdx.frontmatter.title}>
         <p>{data.mdx.frontmatter.date}</p>
         {children}
      </Layout>
   );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

export const query = graphql`
   query MyQuery($id: String) {
      mdx(id: { eq: $id }) {
         frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
         }
      }
   }
`;
