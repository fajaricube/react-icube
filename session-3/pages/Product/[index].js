import { useRouter } from 'next/router'
import Button from '../../src/components/commons/Button'
import theme from './product.module.scss'
import { useQuery, gql  } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import Link from "next/link";
import Layout from '../../src/components/core/Layout'
import ProductDetail from '../../src/components/core/ProductDetail';
import { Cart } from '../../redux/actions/cart';
import { useDispatch , connect} from 'react-redux';
import React , { useState, Component, useEffect } from 'react';
import Router from 'next/router'
import Loader from '../../src/components/core/Loader'



const Post = () => {
  const [count, setCount] = useState(1);

    const router = useRouter()
    const productSku = router.query.index
    
    const PRODUCT_DATA = gql`

    {
        products (filter: {sku: {eq: "${productSku}"}}) {
          items {
              id
              name
              sku
              url_key
              description {
                html
              }
              small_image  {
                url
              }
              price_range {
                maximum_price {
                  regular_price {
                    value
                    currency
                  }
                  final_price {
                    value
                    currency
                  }
                  discount {
                    amount_off
                    percent_off
                  }
                }
              }
          }
        }
      }

    `;


    const { loading, error, data } = useQuery(PRODUCT_DATA, {
    });
  
    if (loading) {
      return <div><Loader/></div>;
    }
    const product = data.products.items[0];

        var id = product.id;
    var brand = "asdasd";
    var sku = product.sku;
    var name = product.name;
    var img_path = product.small_image.url
    var price_awal= product?.price_range?.maximum_price?.final_price?.value ?? 0;
    var price = product?.price_range?.maximum_price?.final_price?.value ?? 0;
    price = parseInt(price)*1000;
    var desc = product?.description?.html ?? "";
    var productOldPrice= Math.round(price + 20)
    var productFinalPrice=Math.round(price)
    
    const dispatch = useDispatch();
    const AddCart = id_product => {
      const value = {
        product_id: id_product,
        title: name,
        qty: count,
        price: price,
        image: img_path,
      };
      dispatch(Cart(value));
      
      Router.push('/Cart');
    };
    return (
        <div>
      <Layout>
        
        <div className={theme.widget}>
        <div className={theme.widget__header}>
            
        <h4 className={theme.widget__title} ><span style={{width:'100%', display:'inline-block'}}>CATEGORY</span> <span>{}</span></h4>
    
        </div>
        <div className={theme.widget__content}>
        <div className={theme.productRow}>
                  
        <ProductDetail
                                id={id}
                                src={img_path}
                                alt={name}
                                productName={name}
                                productBrand={desc}
                                productFinalPrice={Math.round(price)}
                                productOldPrice={Math.round(price + 20)} //Example
                               
                                className={theme.productDetail}
                                sku={sku}
                            />
                  <div className={theme.addtocart}>
                                            <div className={theme.boxqty}>
                                            <input type="hidden" id="itemName" value={name} />
                                           <input type="hidden" id="price" value={Math.round(price)} />
                                             
                                            <Button variant="contained" color="primary" onClick={() =>
                                                      {if(count> 0) {
                                                          setCount(count - 1)
                                                      }}
                                                  }> - </Button>                                              
                                                  <input id="qty" type="text" className={theme.inputspecial} min="0" value={count} readOnly/>
                                                  <Button variant="contained" color="primary" onClick={() =>
                                                      setCount(count + 1)}
                                                  > + </Button>

                                              </div>
                                            <div className={theme.boxaddtocart}>
                                                <button className={theme.btnaddtocart}  onClick={() =>
                                                    {
                                                      AddCart(id);
                                                    }    
                                                }
                                                >
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>


</div>
         </div>
         </div>
      </Layout>
    </div>
      );

}


export default withApollo({ ssr: true }) (Post);