import React from 'react';

import MainNavStyles from './styles/MainNavStyles.css.js';

class MainNav extends React.Component {
    render() {
        return (
        	<div style={MainNavStyles.mainNav}>
	        	<div class="row" style={MainNavStyles.navTop}>
		            <div class="container">
		                <div class="text-center">
		                	<img style={MainNavStyles.picture} src="portfolio-react/images/eric-zhu.jpg"></img>
		                </div>
		                <div style={MainNavStyles.nameDiv}>ERIC ZHU</div>
		            </div>
	            </div>
            </div>
        );
    }
}

export default MainNav;