import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {useSelector, useDispatch} from 'react-redux';
import { RemoveCart } from "../../redux/actions/cart";

const GET_PRODUCTS = gql`
  query Category {
    categoryList(filters: {ids: {eq: "50"}}) {
      id
      name
      description
      products {
        items {
          id
          name
          sku
          sale
          price_range {
            maximum_price {
              final_price {
                value
              }
            }
          }
          thumbnail {
            url
          }
        }
      }
    }
  }
`;
const Cart = () => {
  const dataCart = useSelector((state) => state.cart) || [];
  
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    console.log(productId);
    dispatch(
      
      RemoveCart({
        id: productId,
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {dataCart.Cart.map((val, index) => {
          var price = val.price;
          price = parseInt(price) * 1000;
          let imagenya = val.image;

          return (
            <View key={index} style={styles.listItem}>
              <View>
                <Image style={styles.imgProduct} source={imagenya} />
              </View>
              <View style={styles.productInfo}>
                <View style={styles.s1}>
                  <Text style={styles.productItemName}>{val.title}</Text>
                  <Text style={styles.productItemPrice}>{price}</Text>
                </View>
                <Text>Qty : {val.qty}</Text>
                <Text style={styles.remove} 
              //   onPress={() =>
              //   handleRemove(
              //     val.product_id,
              //           )
              // }
              >Remove</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  listItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ecf0f1',
    marginBottom: 30,
    borderRadius: 8,
  },
  s1: {
    // flexDirection:'row',
    // justifyContent: 'space-between',
    // flex:1,
    // flexWrap: 'wrap',
  },
  productItemName: {
    fontSize: 12,
  },
  productItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'orange',
  },
  remove: {
    marginTop: 10,
    color: 'red',
    textDecorationLine: 'underline',
  },
  productInfo: {
    marginLeft: 20,
  },
  imgProduct: {
    width: 80,
    height: 80,
  },
  textTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
export default Cart;
