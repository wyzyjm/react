import React, { Component } from "react"
import Welcom from "./index.module.css"
export default class Hello extends Component {
    render() {
        return <div className={Welcom.title}>欢迎</div>
    }
}
