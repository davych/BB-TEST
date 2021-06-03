import React from "react"
import Detail from './Detail'
import {
    Switch,
    Route
} from "react-router-dom"

export default function BasicExample() {
    return (
        <Switch>
            <Route exact path="/">
                <Detail />
            </Route>
        </Switch>
    )
}