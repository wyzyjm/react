let obj = {
    name: "小明",
    age: 18,
    do: {
        one: "one",
        too: "too",
        thr: "thr"
    }
}
const { name } = obj
console.log("简单解构,name是", name)

const {
    do: { one }
} = obj
console.log("连续解构,one是", one)
