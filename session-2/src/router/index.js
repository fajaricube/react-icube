import {
  Home,
  Category,
  Cart,
  ProductDetail,
  Login,
  Register,
  Logout,
  Profile,
} from '../containers/pages/';

const Router = [
  { title: 'Home', path: '/', component: Home },
  { title: 'Category', path: '/category/:slug', component: Category },
  { title: 'Category', path: '/category/', component: Category },
  { title: 'Cart', path: '/cart', component: Cart },
  { title: 'Product Detail', path: '/productdetail', component: ProductDetail },
  { title: 'Login', path: '/login', component: Login },
  { title: 'Register', path: '/register', component: Register },
  { title: 'Logout', path: '/logout', component: Logout },
  { title: 'profile', path: '/profile', component: Profile },
];

export default Router;
