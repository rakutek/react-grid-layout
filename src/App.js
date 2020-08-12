import React from 'react';
import GridLayout from 'react-grid-layout';
import SampleComponent from './SampleComponent';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            cols: 12,
            rowHeight: 30,
            width: window.parent.screen.width
        }

        this.layouts = [
            {i: 'a', x: 0, y: 0, w: 3, h: 5},
            {i: 'b', x: 3, y: 0, w: 3, h: 5},
            {i: 'c', x: 0, y: 5, w: 3, h: 5},
            {i: 'd', x: 3, y: 5, w: 3, h: 5},
            {i: 'e', x: 0, y: 10, w: 3, h: 5},
            {i: 'f', x: 3, y: 1, w: 3, h: 5},
        ];
    }

    render() {
        return (
            <GridLayout className="layout" layout={this.layouts} cols={this.state.cols} rowHeight={this.state.rowHeight}
                        width={this.state.width}>


                <div key="a" style={{border: "solid", backgroundColor: "#EEEEEE", textAlign: "center"}}><SampleComponent
                    componentName="A"/></div>

                <div key="b" style={{border: "solid", backgroundColor: "#EEEEEE", textAlign: "center"}}><SampleComponent
                    componentName="B"/></div>

                <div key="c" style={{border: "solid", backgroundColor: "#EEEEEE", textAlign: "center"}}><SampleComponent
                    componentName="C"/></div>

                <div key="d" style={{border: "solid", backgroundColor: "#EEEEEE", textAlign: "center"}}><SampleComponent
                    componentName="D"/></div>

                <div key="e" style={{border: "solid", backgroundColor: "#EEEEEE", textAlign: "center"}}><SampleComponent
                    componentName="E"/></div>

                <div key="f" style={{border: "solid", backgroundColor: "#EEEEEE", textAlign: "center"}}><SampleComponent
                    componentName="F"/></div>


            </GridLayout>
        );
    }
}

export default App;