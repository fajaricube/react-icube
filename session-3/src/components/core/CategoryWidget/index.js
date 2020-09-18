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
                <h4 className={theme.widget__title}>CATEGORY</h4>
                <h5 className={theme.widget__link}>
                    <Link href="./Category">
                      <a>
                        <Button btnTransparent>Lihat Semua</Button>
                      </a>
                    </Link>
                </h5>
            </div>
            <div className={theme.widget__content}>
            <div className={theme.categoryRow}>
                
            {
                category.filter(d => d.image_path !== "").slice(0, 6).map((val, i) => {
                  var id = val.id;
                  var name = val.name;
                  var img_path = val.image_path
                  console.log(img_path);
                  if(img_path == "" || img_path == null){
                    img_path = "https://via.placeholder.com/50"
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

export default  withApollo({ ssr: false }) (Category);
