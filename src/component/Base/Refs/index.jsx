import React, { Component, createRef } from "react"

export default class Refs extends Component {
    myRef = createRef()
    myRef2 = createRef()
    getInput = () => {
        console.log(this)
    }
    render() {
        return (
            <div>
                <div>
                    <h3>字符串形式</h3>
                    <input type="text" ref="input1" />
                    <button onClick={this.getInput}>获取value</button>
                </div>
                <div>
                    <h3>回调函数</h3>
                    <input ref={c => (this.input2 = c)} type="text" onBlur={this.getInput} />
                </div>
                <div>
                    <h3>API方式</h3>
                    <input ref={this.myRef} type="text" onBlur={this.getInput} />
                    <input ref={this.myRef2} type="text" onBlur={this.getInput} />
                </div>
                i
                <hr />
            </div>
        )
    }
}
