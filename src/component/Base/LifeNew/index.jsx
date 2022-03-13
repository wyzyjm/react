import React, { Component } from "react"
import lifeNewStyle from "./index.module.css"
export default class LifeNew extends Component {
    state = { list: [] }

    // 组件挂载完毕
    componentDidMount() {
        this.timer = setInterval(() => {
            const { list } = this.state
            const item = "news" + (list.length + 1)
            this.setState({ list: [item, ...list] })
        }, 1000)
    }
    // 组件更新前
    getSnapshotBeforeUpdate(preProps, preState) {
        return this.refs.list.scrollHeight
    }
    // 组件更新完毕
    componentDidUpdate(preProps, preState, scrollHeight) {
        this.refs.list.scrollTop += this.refs.list.scrollHeight - scrollHeight
    }
    // 组件销毁前
    componentWillUnmount() {
        clearInterval(this.timer) // 组件将要销毁前,清除定时器
    }
    render() {
        const { list } = this.state
        return (
            <div>
                <ul className={lifeNewStyle.list} ref="list">
                    {list.map((v, i) => (
                        <li key={i}> {v} </li>
                    ))}
                </ul>
            </div>
        )
    }
}
