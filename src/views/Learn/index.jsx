import React, { Component } from "react"
/**
  ref: 三种使用方式 字符串形式, 回调函数 | React API 形式
 */
// import Refs from "../../component/Base/Refs" // ref
// import Forms from "../../component/Base/Forms" // ref实践 + 表单收集
import LifeOld from "../../component/Base/LifeOld" // old life
export default class Lean extends Component {
    render() {
        return (
            <div>
                {/* <Refs /> */}
                {/* <Forms /> */}
                <LifeOld />
            </div>
        )
    }
}
