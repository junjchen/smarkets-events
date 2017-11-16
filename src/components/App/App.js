import React, {Component} from 'react'
import {Route, Link, Redirect} from 'react-router-dom'
import CEventList from '../../containers/CEventList'
import CEventDetail from '../../containers/CEventDetail'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <header>
                    <Link to='https://smarkets.com'>
                        <img
                            className="app__logo"
                            alt="logo"
                            src="http://bookmaker-info.com/en/wordpress/wp-content/uploads/2014/08/smarkets.png"/>
                    </Link>
                </header>
                <main>
                    <Route exact path={process.env.PUBLIC_URL + '/'} render={() => <Redirect to={process.env.PUBLIC_URL + '/popular'}/>}/>
                    <Route exact path={process.env.PUBLIC_URL + '/popular'} component={CEventList}/>
                    <Route exact path={process.env.PUBLIC_URL + '/event/:id'} component={CEventDetail}/>
                </main>
            </div>
        )
    }
}

export default App
