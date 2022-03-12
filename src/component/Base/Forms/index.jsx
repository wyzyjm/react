import React, { Component } from "react"

export default class Forms extends Component {
    state = {
        username: "", // 用户名
        password: "", // 密码
        keyword: "" // 关键词
    }
    // 收集非受控表单内容
    collectForm = e => {
        e.preventDefault()
        const { username, password, keyword } = this
        console.log(`非受控组件用户名${username.value},密码${password.value},关键词${keyword}`)
    }
    // 收集受控表单内容
    collectForm2 = e => {
        e.preventDefault() // 组织默认事件
        const { username, password, keyword } = this.state
        console.log(`受控组件用户名${username},密码${password},关键词${keyword}`)
    }
    // 更新表单方式一:input
    setInput = e => this.setState({ [e.target.name]: e.target.value }) // 设置state中的值
    // 更新表单方式二: 闭包 + 组件传参
    setFormData = dataType => e => this.setState({ [dataType]: e.target.value }) // 设置state中的值
    // 更新表单方式三: 函数调函数
    setInput3 = (e, dataType) => this.setState({ [dataType]: e.target.value })
    render() {
        return (
            <div>
                <div>
                    <h2>非受控表单</h2>
                    <form onSubmit={this.collectForm}>
                        <div>
                            <label htmlFor="username">用户名</label>
                            <input type="text" id="username" ref={c => (this.username = c)} />
                        </div>
                        <div>
                            <label htmlFor="password">密码</label>
                            <input type="text" id="password" ref={c => (this.password = c)} />
                        </div>
                        <button>提交</button>
                    </form>
                </div>
                <div>
                    <h2>受控表单</h2>
                    <form onSubmit={this.collectForm2}>
                        <div>
                            {/* 方式一 */}
                            <label htmlFor="username2">用户名</label>
                            <input type="text" id="username2" onChange={this.setInput} name="username" />
                        </div>
                        <div>
                            {/* 方式二 */}
                            <label htmlFor="password2">密码</label>
                            <input type="password" id="password2" onChange={this.setFormData("password")} name="password" />
                        </div>
                        <div>
                            <label htmlFor="keyword">关键词</label>
                            {/* 方式三 */}
                            <input type="text" id="keyword" onChange={e => this.setInput3(e, "keyword")} name="keyword" />
                        </div>
                        <button>提交</button>
                    </form>
                </div>
            </div>
        )
    }
}
