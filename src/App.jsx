import React, { Component } from "react"
import Learn from "./views/Learn" // 学习用
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from "react-router-dom"
import Hello from "./views/Hello"
// import Welcom from "./views/Welcom"
import List from "./views/List"
export default class App extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <NavLink to="/learn">Learn</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home">home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/list">list</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/learn" component={Learn}></Route>
                    <Route path="/home" component={Hello}></Route>
                    <Route path="/list" component={List}></Route>
                    <Redirect to="home" />
                </Switch>
            </Router>
        )
    }
}
