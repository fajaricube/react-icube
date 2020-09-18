import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import theme from './catalogproduct.module.scss'
import Button from "../../commons/Button";
import { withApollo } from "../../../../lib/apollo";
import Link from "next/link";import $ from 'jquery';





const CatalogProduct = ({dataProduct}) => {

   
    const brand = 'asdasd';

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
                <div className={theme.catalogProduct}>
                    {dataProduct.products.items.map((data, i) => {
                        var price = data?.price_range?.maximum_price?.final_price?.value ?? 0;
                        price = parseInt(price)*1000;
                        return (
                            <ProductItem
                                id={data.id}
                                src={data.thumbnail.url}
                                alt={data.name}
                                productName={data.name}
                                productBrand={brand}
                                productFinalPrice={Math.round(price)}
                                productOldPrice={Math.round(price + 20)} //Example
                                key={i}
                                className={theme.productItem}
                                sku={data.sku}
                            />
                        );
                    })}
                    </div>
            </>
        );
    }
    return null;
};

export default withApollo({ ssr: true }) (CatalogProduct);
