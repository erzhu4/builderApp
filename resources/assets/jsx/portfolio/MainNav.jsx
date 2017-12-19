import React from 'react';

import styles from './styles/MainNavStyles.css.js';

class MainNav extends React.Component {
    render() {
        return (
            <div class="container" style={styles.navTop}>
                <div class="text-center"><img class="picture" src="/images/portfolio/eric-zhu.jpg"></img></div>
                <div class="name-div">ERIC ZHU</div>
            </div>
        );
    }
}

export default MainNav;