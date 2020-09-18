import { useQuery, gql  } from "@apollo/client";
import { withApollo } from "../lib/apollo";
import styles from "../styles/Home.module.css";
import Layout from "../src/components/core/Layout"
import Loader from "../src/components/core/Loader"
import Banner from "../src/components/core/Banner"
import CategoryWidget from "../src/components/core/CategoryWidget"
import ProductSlider from "../src/components/core/ProductSlider"
import Link from "next/link";

const CATEGORY_LIST = gql`

  query Category {
    categoryList(filters: {}){
      id
      name
      image_path
    }
  }

`;

function Home() {
  const { loading, error, data } = useQuery(CATEGORY_LIST, {
  });

  if (loading) {
    return <div><Loader/></div>;
  }
  const category = data.categoryList;
  return (
          
    <>
    <div>
      <Layout>
        <Banner/>
        <CategoryWidget/>
        <ProductSlider />
      </Layout>
    </div>
    
    </>
  );
}

export default  withApollo({ ssr: true }) (Home);