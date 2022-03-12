# React 之 Refs

1. 字符串形式:
    - 不推荐,存在效率问题, 不建议使用
2. 回调函数形式:
    - 通过回调函数往 this 上添加当前 dom
3. API 方式:
    - React.createRef()
    - 返回一个容器, 用来存储被 ref 所标识的节点
    - 在节点上 this.myRef
    - 一个节点一个变量

```js


class Demo extends Component {
    myRef = React.createRef() // 返回一个对象, 只能存储一个
    getInput = () =>{
        console.log(this.refs)
        const {input1} = this.refs
         console.log(input1.value)
    }
    return (
       <div>
          <input ref="input1" /> // 字符串形式, 不推荐
          <input ref={c=>this.input1 = c} /> // 回调形式
          <input ref={this.myRef} /> // 回调形式

          <button onClick={this.getInput}>获取input值</button>
       </div>
    )
}
```
