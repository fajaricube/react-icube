import React from 'react';
import {View,Image, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {gql, useQuery} from '@apollo/client';
const CATEGORY_LIST = gql`

  query Category {
    categoryList(filters: {}){
      id
      name
      image_path
    }
  }

`;

const Category = ({navigation}) => {
  const { loading, error, data } = useQuery(CATEGORY_LIST, {
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error :(</Text>;
  }
  const category = data.categoryList;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Category List </Text>
          </View>
          <View style={styles.productList}>
            {category.map((val, index) => {
              let imagenya ={ uri: `${val.image_path ? val.image_path :'https://dummyimage.com/120x100/941394/d9ccd9'}`};
              return(

              <View key={index} style={styles.productItem}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductList', {
                      categoryId: val.id,
                    })
                  }>
                  <Image style={styles.imgProductList} source={imagenya} />
                  <View style={styles.productInfo}>
                <Text style={styles.productItemName}>{val.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
            })}
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
export default Category;
