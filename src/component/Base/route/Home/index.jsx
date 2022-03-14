import React, { Component } from "react"
import { Switch, Route, Redirect, NavLink } from "react-router-dom"

import componentA from "./A"
import componentB from "./B"
export default class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/learn/routea">A组件</NavLink>
                    </li>
                    <li>
                        <NavLink to="/learn/routeb">B组件</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/learn/routea" component={componentA} />
                    <Route path="/learn/routeb" component={componentB} />
                    {/* 组件渲染, 重定向到这里 */}
                    <Redirect to="/learn/routea" />
                </Switch>
            </div>
        )
    }
}
