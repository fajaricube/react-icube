import GlobalNotification from '../../../components/core/GlobalNotification';
import MenuIcon from '../../../../public/media/icons/menu.svg';
import BasketIcon from '../../../../public/media/icons/supermarket.svg';
import theme from './header.module.scss';
import Link from 'next/link'
import Router from 'next/router'


const Header = (props) => {
   
    return (
        <>
            <div className={theme.header}>
                <div className={theme.header__panel}>
                    <GlobalNotification />
                </div>
                <div className={theme.header__content}>
                    <div className={theme.nav}>
                        <MenuIcon className={theme.menu__icon} />
                    </div>
                    <div className={theme.app__name}>
                        <h1 onClick={() => { Router.push('/'); }}>Fajar</h1>
                    </div>

                    <div className={theme.minicart__block}>
                        <BasketIcon onClick={() => { Router.push('/Cart'); }} className={theme.shop__icon} />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Header;
