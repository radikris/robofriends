import React from 'react';
import './App.css'
import CardList from '../components/CardList';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({ robots: users })
            })

    }

    onSearchChange = (event) => {
        console.log(event.target.value);

        this.setState({
            searchfield: event.target.value
        })

    }

    render() {

        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1 className="tc">Loading...</h1>
        } else {
            return (
                <div className='tc pa2 ba b--green'>

                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>

                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }


    }
}

export default App;