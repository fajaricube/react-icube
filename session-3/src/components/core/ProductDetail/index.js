import theme from './productdetail.module.scss';
import Link from 'next/link'

const ProductItem = ({
    id,
    src,
    alt,
    productName,
    productBrand,
    productOldPrice,
    productFinalPrice,
    className,
    sku

}) => {
    
    return (
        <>
            <div role="button" className={[theme.product__item, className].join(' ')}>
                <div className={theme.product__image}>
                    <img src={src} alt={alt} />
                    <div className={theme.product__discount}>
                        <small>{'10%'}</small>
                    </div>
                </div>
                <Link  href="/Product/[index]" as={`/Product/${sku}`}>
                <div className={theme.product__description}>
                    <h1 className={theme.product__name}>{productName}</h1>
                    <small className={theme.product__brand}>
                        #SKU : {sku}
                        </small>
                        <span className={theme.product__price}>
                        <small className={theme.old__price}>{`$ ${productOldPrice}`}</small>
                        <strong className={theme.final__price}>{`$ ${productFinalPrice}`}</strong>
                    </span>
                    <h2 className={theme.product__name}>Description</h2>
                        <div className="product-info-detailed" dangerouslySetInnerHTML={{
    __html: productBrand}}></div>
                   
                </div>
                </Link>
            </div>
        </>
    );
};


export default ProductItem;
