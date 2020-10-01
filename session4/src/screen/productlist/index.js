import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';


const ProductList = ({navigation, route}) => {
  const {categoryId} = route.params;

  const CATEGORY_LIST = gql`

    query Category {
        categoryList(filters: { ids: { eq: "${categoryId}" } }){
            id
            name
            products{
                items{
                    id
                    name
                    sale
                    sku
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


    const { loading, error, data } = useQuery(CATEGORY_LIST, {
    });
  
    if (loading) {
      return <Text>Loading...</Text>;
    }
    if (error) {
      return <Text>Error :(</Text>;
    }
    const product = data.categoryList[0].products.items;
    const nameCategory = data.categoryList[0].name;

  return (
    // null
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{nameCategory} </Text>
          </View>
          <View style={styles.productList}>
            {product.map((val, index) => 
           { 
            var price = val?.price_range?.maximum_price?.final_price?.value ?? 0;
            price = parseInt(price)*1000;
            let imagenya ={ uri: `${val.thumbnail.url}`};
            return (
              <View key={index} style={styles.productItem}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetail', {productSku: val.sku})
                  }>
                  <Image style={styles.imgProductList} source={imagenya} />
                  <View style={styles.productInfo}>
                    <Text style={styles.productItemName}>{val.name}</Text>
                    <Text style={styles.productItemPrice}>{price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )})}
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
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  section: {
    marginVertical: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: `${100 / 4}%`,
    marginBottom: 20,
    margin: 10,
  },
  productInfo: {
    alignItems: 'center',
  },
  productItemName: {
    fontSize: 12,
  },
  productItemPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  imgProductList: {
    alignItems: 'center',
    width: 110,
    height: 90,
    marginBottom: 10,
  },
});

export default ProductList;
