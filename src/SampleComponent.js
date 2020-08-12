import React from 'react';
import './App.css';

class SampleComponent extends React.Component{

    render(){
        console.log(this.props);
        return (
            <div>
                <h3>Component {this.props.componentName}</h3>
            </div>
        );
    }

}

export default SampleComponent;