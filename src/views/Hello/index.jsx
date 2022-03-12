import React, { Component } from "react"
import PubSub from "pubsub-js" // 兄弟间传值

import Text from "../../component/Text"
import "./index.css"
export default class Hello extends Component {
    sendDate = () => {
        console.log("sendDate中的this", this)
        setTimeout(() => {
            PubSub.publish("getDate", {
                list: [
                    { id: 132, name: "小明" },
                    { id: 12, name: "小黑" },
                    { id: 32, name: "小白" }
                ]
            })
        }, 2000)
    }
    render() {
        return (
            <div className="title">
                <button onClick={this.sendDate}>给list发送数据</button>
                <Text />
            </div>
        )
    }
}
