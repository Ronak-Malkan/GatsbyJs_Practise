import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
   return (
      <Layout pageTitle="Home Page">
         <p>I'm making this by following the Gatsby Tutorial</p>
      </Layout>
   );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
