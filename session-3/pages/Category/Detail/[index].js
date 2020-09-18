import { useRouter } from 'next/router'
import Layout from "../../../src/components/core/Layout"
import Button from '../../../src/components/commons/Button'
import theme from './categoryDetail.module.scss'
import { useQuery, gql  } from "@apollo/client";
import { withApollo } from "../../../lib/apollo";
import Link from "next/link";
import CatalogProduct from '../../../src/components/core/CatalogProduct';
import Loader from '../../../src/components/core/Loader'


const Post = () => {
    const router = useRouter()
    const pid = router.query.index
    
    const CATEGORY_LIST = gql`

    query Category {
        categoryList(filters: { ids: { eq: "${pid}" } }){
            id
            name
            products{
                items{
                    id
                    name
                    sale
                    sku
                    price_range{
                        maximum_price{
                        final_price{
                            value
                        }
                        }
                    }
                    thumbnail{
                        url
                    }
                }
            }
        }
    }

    `;


    const { loading, error, data } = useQuery(CATEGORY_LIST, {
    });
  
    if (loading) {
      return <div><Loader/></div>;
    }
    // const product = data.categoryList[0].products.items;
    const product = data.categoryList[0];
    const nameCategory = data.categoryList[0].name;
    return (
        <div>
      <Layout>
        
        <div className={theme.widget}>
        <div className={theme.widget__header}>
            
        <h4 className={theme.widget__title} ><span style={{width:'100%', display:'inline-block'}}>CATEGORY</span> <span>{nameCategory}</span></h4>
    
        </div>
        <div className={theme.widget__content}>
                    <CatalogProduct dataProduct={product}  />
         </div>
         </div>
      </Layout>
    </div>
      );

}


export default withApollo({ ssr: true }) (Post);