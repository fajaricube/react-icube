import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import $ from 'jquery';

import theme from './banner.module.scss';
import { useQuery, gql } from "@apollo/client";
import {withApollo} from '../../../../lib/apollo';

const BANNER_LIST = gql`
  query{
    getHomepageSlider{
        slider_id
        images{
          image_id
          image_url
        }
    }
  }
`;

const Slider = dynamic(() => import('react-owl-carousel'), {
    ssr: false
});

const config =
{
    'autoPlay': true,
    'items': 1,
    'dots': false,
    'nav': false,
    'stagePadding': 20,
    'loop': true,
    'margin': 10
};


const Banner = () => {
    const [isMount, setIsMount] = useState(false);
    const response = useQuery(BANNER_LIST, []);
    const { loading, error, data } = response;
    if (loading) {
      return <div>loading...</div>;
    }  if (error) {
      return <div>error...</div>;
    } 
    const slider = data.getHomepageSlider.images;

    useEffect(() => {
        window.jQuery = $;
        window.$ = $;
        global.jQuery = $;
        setIsMount(true);

        return () => {
            window.jQuery = undefined;
            window.$ = undefined;
            global.jQuery = undefined;
            setIsMount(false);
        };
    }, []);

    if (isMount) {
        return (
            <>
                <Slider {...config}>
                    {slider.map((data, i) => {
                        return (
                            <div className={theme.owl_images} key={i}>
                                <img src={data.image_url} alt={data.alt} />
                                <h2 className={theme.owl_descrition}>{"Slider Title"}</h2>
                            </div>
                        );
                    })}
                </Slider>
            </>
        );
    }

    return null;
};

export default withApollo({ ssr: true })(Banner);
