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

const GET_PRODUCTS = gql`
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
const Cart = () => {
  const {loading, error, data} = useQuery(GET_PRODUCTS, {
  });
           
    if (loading) {
      return <Text>Loading...</Text>;
    }
    if (error) {
      return <Text>Error :(</Text>;
    }
    
    const dataCart = data.categoryList[0].products.items;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {dataCart.slice(0, 2).map((val, index) => {
      var price = val?.price_range?.maximum_price?.final_price?.value ?? 0;
       price = parseInt(price)*1000;
       let imagenya ={ uri: `${val.thumbnail.url}`};

      return (
          <View key={index} style={styles.listItem}>
            <View>
              <Image style={styles.imgProduct} source={imagenya} />
            </View>
            <View style={styles.productInfo}>
              <View style={styles.s1}>
                <Text style={styles.productItemName}>{val.name}</Text>
                <Text style={styles.productItemPrice}>{price}</Text>
              </View>
              <Text>Qty : 1</Text>
              <Text style={styles.remove}>Remove</Text>
            </View>
          </View>
        )})}
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
    marginTop:10,
    color: 'red',
    textDecorationLine: "underline",
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
