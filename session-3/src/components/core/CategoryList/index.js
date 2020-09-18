import theme from './category.module.scss';
import { useQuery, gql  } from "@apollo/client";
import { withApollo } from "../../../../lib/apollo";
import Button from "../../commons/Button";
import Link from "next/link";

const CATEGORY_LIST = gql`

  query Category {
    categoryList(filters: {}){
      id
      name
      image_path
    }
  }

`;

function Category() {
  const { loading, error, data } = useQuery(CATEGORY_LIST, {
  });

  if (loading) {
    return <div>loading...</div>;
  }
  const category = data.categoryList;
    return (
        <>
        <div className={theme.widget}>
            <div className={theme.widget__header}>
                <h4 className={theme.widget__title}>LIST CATEGORY</h4>
            </div>
            <div className={theme.widget__content}>
            <div className={theme.categoryRow}>
                
            {
                category.map((val, i) => {
                  var id = val.id;
                  var name = val.name;
                  name =name.slice(0,13);
                  var img_path = val.image_path
                  console.log(img_path);
                  if(img_path == "" || img_path == null){
                    img_path = "https://dummyimage.com/120x100/941394/d9ccd9"
                  }
                  return (
                    
                        <Link key={i} href="/Category/Detail/[index]" as={`/Category/Detail/${id}`}>
                            <div className={theme.categoryBlock} key={i}>
                                <div
                                    className={theme.categoryCard}>
                                        <img src={img_path} className={theme.imgCategory}/>
                                    <span>{name}</span>
                                </div>
                            </div>
                        </Link>
                        
                  );
                })
              } 
              </div>
            </div>
            </div>
        </>
    );
};

export default  withApollo({ ssr: true }) (Category);
