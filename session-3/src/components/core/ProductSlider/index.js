import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import theme from './productslider.module.scss'
import Button from "../../commons/Button";
import { useQuery, gql  } from "@apollo/client";
import { withApollo } from "../../../../lib/apollo";
import Link from "next/link";import $ from 'jquery';


const CATEGORY_PRODUCT_LIST = gql`

query Category {
    categoryList(filters: { ids: { eq: "50" } }){
        id
        name
        description
        products{
            items{
                id
                name
                sku
                sale
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

const Slider = dynamic(() => import('react-owl-carousel'), {
    ssr: false
});
const config =
{
    'autoPlay': true,
    'items': 2,
    'dots': false,
    'nav': true,
    'stagePadding': 0,
    'loop': true,
    'margin': 15
};

const ProductSlider = ({ config,  }) => {

    const { loading, error, data } = useQuery(CATEGORY_PRODUCT_LIST, {
    });
  
    if (loading) {
      return <div>loading...</div>;
    }
    const categoryProductList = data.categoryList[0];
    const brand = data.categoryList[0].name;
    const categoryId = data.categoryList[0].id;
    console.log(categoryProductList);

    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        window.jQuery = $;
        window.$ = $;
        global.jQuery = $;
        setIsMount(true);

        return () => {
            window.jQuery = undefined;
            window.$ = undefined;
            global.jQuery = undefined;
            setIsMount(false);
        };
    }, []);

    if (isMount) {
        return (
            <>
            <div className={theme.widget}>
            <div className={theme.widget__header}>
                <h4 className={theme.widget__title}>#DIRUMAHAJA</h4>
                <h5 className={theme.widget__link}>
                    <Link href="/Category/Detail/[index]" as={`/Category/Detail/49`}>
                        <a>
                        <Button btnTransparent>Lihat Semua</Button>
                        </a>
                    </Link>
                </h5>
            </div>
            <div className={theme.widget__content}>
                <Slider {...config}>
                    {categoryProductList.products.items.map((data, i) => {
                        var price = data?.price_range?.maximum_price?.final_price?.value ?? 0;
                        price = parseInt(price)*1000;
                        return (
                            <ProductItem
                                src={data.thumbnail.url}
                                alt={data.name}
                                productName={data.name}
                                productBrand={brand}
                                productFinalPrice={Math.round(price)}
                                productOldPrice={Math.round(price + 20)} //Example
                                key={i}
                                id={data.id}
                                categoryId={categoryId}
                                sku={data.sku}
                            />
                        );
                    })}
                </Slider>
                </div>
                </div>
            </>
        );
    }
    return null;
};

export default withApollo({ ssr: true }) (ProductSlider);
