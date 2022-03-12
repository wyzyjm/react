import React, { Component } from "react"
import { unmountComponentAtNode } from "react-dom"

export default class LifeOld extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "小明"
        }
        console.log("执行--->constructor")
    }

    // 修改名字
    editName = () => this.setState({ name: "小黑" })
    remove = () => unmountComponentAtNode(document.getElementById("root"))
    render() {
        console.log("执行--->render")
        const { name } = this.state
        return (
            <div>
                <h2> {name} </h2>
                <button onClick={this.editName}>修改名字</button>
                <button onClick={this.remove}>组件销毁</button>
            </div>
        )
    }
    // 组件将要挂载
    componentWillMount() {
        // 组件将要挂载,还没挂载呢
        console.log("执行--->componentWillMount, 不建议使用")
    }
    // 组件挂载完毕
    componentDidMount() {
        console.log("执行--->componentDidMount,组件挂载完毕")
    }

    // 组件销毁
    componentWillUnmount() {
        console.log("执行--->componentWillUnmount")
    }
}
