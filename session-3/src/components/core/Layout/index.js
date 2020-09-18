import Header from '../../../components/core/Header';
import Navigation from '../../../components/core/Navigation';
import theme from './layout.module.scss';

const Layout = ({
    children
}) => {

    return (
        <>
        <div className={theme.layer}>
            <div className={theme.wrapper} id={"maincontent"}>
                <Header  />
                <div className={theme.main__content}>{children}</div>
                <Navigation />
            </div>
        </div>
        </>
    );
};

export default Layout;
