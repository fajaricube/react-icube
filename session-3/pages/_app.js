import '../styles/globals.css'
import'../styles/flexboxgrid.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Provider } from "react-redux";
import store from "../redux/store";

import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />      
    </Provider>
  )
  
  
}

export default MyApp
