import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


import "../styles/home.css";
import "../styles/about.css"; 

export default function BannerRevisited() {

	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();
	
    useEffect(() => {

        console.log(location.pathname);
        if(location.pathname === '/About'){
            setAboutPage(true)
        };
    }, [location.pathname]);

	const classe = aboutPage ? 'bannerAbout' : 'banner';

	return (
		<section className={classe}>
			{!aboutPage && <p><span>Chez vous,</span> partout et ailleurs</p>}
		</section>
	)
}