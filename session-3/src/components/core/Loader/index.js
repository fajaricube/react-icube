import theme from './loader.module.scss';
import Layout from "../Layout"

const Loader = () => {
    return (
        <>
        <Layout>
            <div className={theme.loader}>
                <img src="https://i.pinimg.com/originals/7e/b2/3b/7eb23b8fa4b6c374504ce2fb9d9c5399.gif" alt=""/>
                
            </div>
        </Layout>
        </>
    );
};

export default Loader;
