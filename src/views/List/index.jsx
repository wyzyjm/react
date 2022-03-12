import React, { Component } from "react"
import PubSub from "pubsub-js"
export default class Hello extends Component {
    state = {
        list: [],
        isHot: 0
    }

    // 页面挂载
    componentDidMount() {
        this.token = PubSub.subscribe("getDate", (msg, data) => this.setState(data))
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token) // 组件销毁, 清除订阅
    }
    render() {
        const { list, isHot } = this.state
        return (
            <ul>
                {list.length > 0 && list.map(v => <li key={v.id}> {v.name} </li>)}
                <li> {isHot} </li>
            </ul>
        )
    }
}
