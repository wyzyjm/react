import React, { Component } from "react"
import Hello from "./views/Hello"
import Welcom from "./views/Welcom"
import List from "./views/List"
export default class App extends Component {
    render() {
        return (
            <h2>
                <Hello />
                <List />
                <Welcom />
            </h2>
        )
    }
}
