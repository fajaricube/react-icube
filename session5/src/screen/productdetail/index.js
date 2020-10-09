import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';
import {WebView} from 'react-native-webview';
import {Cart} from '../../redux/actions/cart';
import {useDispatch} from 'react-redux';

var width = Dimensions.get('window').width;

const ProductDetail = ({navigation, route}) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const {productSku} = route.params;

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

  const {loading, error, data} = useQuery(PRODUCT_DATA, {});

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error :(</Text>;
  }
  const productnya = data.products.items[0];

  var price = productnya?.price_range?.maximum_price?.final_price?.value ?? 0;
  price = parseInt(price)*1000;
  let imagenya = {uri: `${productnya.small_image.url}`};
  var name = productnya.name;

  
  const AddCart = (id_product) => {
    const value = {
      product_id: id_product,
      title: name,
      qty: count,
      price: price,
      image: imagenya,
    };
    console.log(value);
    dispatch(Cart(value));

    navigation.navigate('Cart');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.productArea}>
          <View>
            <Image style={styles.imgProduct} source={imagenya} />
          </View>
          <View>
            <Text style={styles.productTitle}>{productnya.name}</Text>
            <Text style={styles.productPrice}>{price}</Text>
            <Text>{productnya.description.html}</Text>
            <WebView
              originWhitelist={['*']}
              source={{html: productnya.description.html}}
            />
          </View>
          <View style={styles.formArea}>
            <View style={styles.boxQty}>
              <Button
                title=" - "
                onPress={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}
              />
              <TextInput
                style={styles.inputCart}
                onChangeText={(text) => setCount(text)}
                value={String(count)}
              />
              <Button title=" + " onPress={() => setCount(count + 1)} />
            </View>
            <TouchableOpacity
              style={styles.buttonCart}
              onPress={() => {
                AddCart(productnya.id);
              }}>
              <Text style={styles.textCart}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  productArea: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  formArea: {
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },
  boxQty: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  labelQty: {
    textAlignVertical: 'center',
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: 'red',
  },
  buttonCart: {
    backgroundColor: 'red',
    padding: 10,
    width: width,
    bottom: 0,
    height: 40,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginLeft: 20,
  },
  inputCart: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 50,
    height: 40,
    textAlign: 'center',
    color: 'black',
  },
  textCart: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 10,
  },
  imgProduct: {
    alignSelf: 'center',
    width: 250,
    height: 230,
    marginBottom: 20,
  },
});
export default ProductDetail;
