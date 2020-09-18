
import theme from "./cart.module.scss";
import Layout from "../../src/components/core/Layout"
import ProductCart from "../../src/components/core/ProductCart"
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';




function Cart() {
    const dataCart = useSelector(state => state.cart) || [];
  console.log(dataCart);

  return (
          
    <>
    <div>
      <Layout>
      <div className={theme.widget}>
        <div className={theme.widget__header}>  
            
        <h1>Shopping Cart</h1>
        </div>
        <div className={theme.widget__content}>
        {dataCart.Cart.map((cartproduct, i) => {
                  return (
                    <ProductCart
                                id={cartproduct.title}
                                src={cartproduct.image}
                                alt={cartproduct.title}
                                productName={cartproduct.title}
                                productBrand={cartproduct.qty}
                                productFinalPrice={Math.round(cartproduct.price)}
                                productOldPrice={Math.round(cartproduct.price + 20)} //Example
                                key={i}
                                className={theme.productItem}
                                sku={cartproduct.title}
                            />
                  );
                })}
       
      <div>
        

        
        </div>
        </div>
        </div>
      </Layout>
    </div>
    
    </>
  );
}

export default  Cart;