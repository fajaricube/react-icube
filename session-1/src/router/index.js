import { Home, Category, Cart, ProductDetail } from "../containers/pages/";

const Router = [
  { title: "Home", path: "/", component: Home },
  { title: "Category", path: "/category/:slug", component: Category },
  { title: "Category", path: "/category/", component: Category },
  { title: "Cart", path: "/cart", component: Cart },
  { title: "Product Detail", path: "/productdetail", component: ProductDetail },
];

export default Router;
