import React, { Component } from "react"
import Learn from "./views/Learn" // 学习用
// import Hello from "./views/Hello"
// import Welcom from "./views/Welcom"
// import List from "./views/List"
export default class App extends Component {
    render() {
        return (
            <h2>
                <Learn />
                {/* <Hello /> */}
                {/* <List /> */}
                {/* <Welcom /> */}
            </h2>
        )
    }
}
