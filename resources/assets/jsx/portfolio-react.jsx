import React from 'react';
import ReactDom from 'react-dom';

import MainNav from './portfolio/MainNav.jsx';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: 'overview'
        }
    }

    render(){
        return (
            <div>
                <MainNav currentPage={this.state.currentPage} />
                <div>This is some content</div>
            </div>
        );
    }
}

ReactDom.render(<Main />, document.getElementById('react-target'));