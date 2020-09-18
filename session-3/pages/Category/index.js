import { useQuery, gql  } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import Layout from "../../src/components/core/Layout"
import CategoryList from "../../src/components/core/CategoryList"
import Link from "next/link";
import Loader from '../../src/components/core/Loader'

const CATEGORY_LIST = gql`

  query Category {
    categoryList(filters: {}){
      id
      name
      image_path
    }
  }

`;

function Category() {
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
        <CategoryList/>
      </Layout>
    </div>
    
    </>
  );
}

export default  withApollo({ ssr: true }) (Category);