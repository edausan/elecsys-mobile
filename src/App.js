import React, { Component } from 'react';
import './App.css';
import DevMessage from './components/dev/DevMessage'
import Index from './components/index'
import { FamilyProvider } from './components/context/FamilyContext'


class App extends Component {
    state = {
        development: false
    }
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowResize)
    }

    handleWindowResize = () => {
        // const windowWidth = window.innerWidth

        // if (windowWidth <= 699) {
        //     document.location = 'http://m.elecsysmfg.cf'
        // } else {
        //     document.location = 'http://www.elecsysmfg.com/'
        // }
    }

    render() {
        return (
            <div className="App">
                <FamilyProvider value="Dausan">

                    {
                        this.state.development ? <DevMessage /> : <Index />
                    }
                </FamilyProvider>

            </div>
        );
    }
}

export default App;
