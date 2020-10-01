import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

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

const GET_PRODUCTS_PROMO = gql`

query Category {
    categoryList(filters: { ids: { eq: "13" } }){
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

const Home = ({navigation}) => {
  const {loading:loading1, error:error1, data:data1} = useQuery(GET_PRODUCTS, {
});

const {loading:loading2, error:error2, data:data2} = useQuery(GET_PRODUCTS_PROMO, {
});

         
  if (loading2) {
    return <Text>Loading...</Text>;
  }
  if (error2) {
    return <Text>Error :(</Text>;
  }
  
  const categoryProductList = data1.categoryList[0].products.items;
  const categoryProductListPromo = data2.categoryList[0].products.items;

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <Image
    style={styles.imgBanner}
    source={{
        uri: 'https://9to9.testingnow.me/media/weltpixel/owlcarouselslider/images/9/t/9to9_id_sept_hp-70__mobile_1080x1080.jpg',
      }}
    />
    <View style={styles.main}>
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>#DIRUMAHAJA</Text>
    </View>
    <ScrollView horizontal>
    <View style={styles.productList}>
    {categoryProductList.map((val, index) =>  {
      var price = val?.price_range?.maximum_price?.final_price?.value ?? 0;
       price = parseInt(price)*1000;
       let imagenya ={ uri: `${val.thumbnail.url}`};

      return (
          
      <View key={index} style={styles.productItem}>
      <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {
          productSku: val.sku,
        })
      }>
      <Image style={styles.imgProductList} source={imagenya} />
      <View style={styles.productInfo}>
    <Text style={styles.productItemName}>{val.name} </Text>
      <Text style={styles.productItemPrice}>{price}</Text>
      </View>
      </TouchableOpacity>
      </View>
      
      )})}
      </View>
      </ScrollView>




      <View style={styles.section}>
    <Text style={styles.sectionTitle}>#PROMO 12/12</Text>
    </View>
    <ScrollView horizontal>
    <View style={styles.productList}>
    {categoryProductListPromo.map((val, index) =>  {
      var price = val?.price_range?.maximum_price?.final_price?.value ?? 0;
       price = parseInt(price)*1000;
       let imagenya ={ uri: `${val.thumbnail.url}`};

      return (
          
      <View key={index} style={styles.productItem}>
      <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {
          productSku: val.sku,
        })
      }>
      <Image style={styles.imgProductList} source={imagenya} />
      <View style={styles.productInfo}>
    <Text style={styles.productItemName}>{val.name} </Text>
      <Text style={styles.productItemPrice}>{price}</Text>
      </View>
      </TouchableOpacity>
      </View>
      
      )})}
      </View>
      </ScrollView>



      </View>
      
      </ScrollView>
      </SafeAreaView>
      );
    };
    
    const win = Dimensions.get('window');
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      },
      pageScreenTitle: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 20,
      },
      pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
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
        fontSize: 25,
        fontWeight: 'bold',
      },
      imgBanner: {
        width: win.width,
        height: 350 * (win.width / 700),
      },
      productList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      },
      productItem: {
        width: 110,
        marginBottom: 20,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 10,
      },
      productInfo: {
        justifyContent: 'center',
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
        width: 150,
        height: 120,
        marginBottom: 10,
      },
    });
    
    export default Home;
    