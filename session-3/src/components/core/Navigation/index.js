import Button from '../../../components/commons/Button';
// import Button from '@material-ui/core/Button';

import HomeIcon from '../../../../public/media/icons/home.svg';
import SearchIcon from '../../../../public/media/icons/search.svg';
import UserIcon from '../../../../public/media/icons/user.svg';
import BasketIcon from '../../../../public/media/icons/supermarket.svg';
import theme from './navigation.module.scss';
import Link from 'next/link';

const Navigation = () => {

    return (
        <>
            <div className={theme.navigation}>
                <div >
                    <Link href="/">
                        <a>
                    <Button
                        btnWhite
                        fullWidth
                      >
                        <HomeIcon className={theme.home_icon} />
                    </Button>
                    </a>
                    </Link>
                </div>
           
                    <Button
                        btnWhite>
                        <SearchIcon className={theme.search_icon} />
                    </Button>
                <div >
                <Link href="/Cart">
                        <a>
                    <Button
                        btnWhite
                        fullWidth
                        >
                        <BasketIcon className={theme.heart_icon} />
                    </Button>
                    </a>
                    </Link>
                </div>
                <div >
                    <Button
                        btnWhite
                        fullWidth
                        >
                        <UserIcon className={theme.user_icon} />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Navigation;
