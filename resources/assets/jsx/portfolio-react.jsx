import React from 'react';
import ReactDom from 'react-dom';

import MainNav from './portfolio/MainNav.jsx';

class Main extends React.Component{
    render(){
        return (<div>
            <MainNav />
            <div>This is some content</div>
        </div>);
    }
}

ReactDom.render(<Main />, document.getElementById('react-target'));