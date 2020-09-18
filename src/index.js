import React from 'react'


import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loading from './Loading'
class App extends React.Component {


    state = { lat: null, errorMessage: '' }

    componentDidMount(props) {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderConent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error:{this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div><SeasonDisplay lat={this.state.lat} /></div>
        }
        if (!this.state.lat && !this.state.errorMessage) {
            return <div><Loading message='Please Accept location request ' /></div>
        }

    }




    render() {
        return (
            <div>
                {this.renderConent()}
            </div>

        )

    }
}




ReactDOM.render(<App />, document.querySelector('#root'));