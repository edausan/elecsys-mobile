import React, { Component } from 'react';
import './App.css';
import DevMessage from './components/dev/DevMessage'
import Index from './components/index'
class App extends Component {
    state = {
        development: false,
        images: []
        // showGotoTop: false
    }

    // componentDidMount() {
    //     this.handleWindowResize()
    //     window.addEventListener('resize', this.handleWindowResize)
    // }

    // handleWindowResize = () => {
    //     const windowWidth = window.innerWidth

    //     if (windowWidth >= 699) {
    //         document.location = 'http://www.elecsysmfg.com/'
    //     }
    // }

    render() {
        return (
            <div className="App">
                {
                    this.state.development ? <DevMessage /> : <Index />
                }
            </div>
        );
    }
}

export default App;
