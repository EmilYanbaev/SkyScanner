import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { compose } from "redux"
import { withPreloadRedirect } from "../hoc/withPreloaderRedirect"

const LoginContainer = React.lazy(() => import("./LoginPage/LoginContainer"))
const SearchContainer = React.lazy(()=> import("./SearchPage/SearchContainer"))
let ViewContentControl = (props) => {
    return (
        <Suspense fallback={<div>LOADING</div>} >
            <Switch>
                <Route path="/login" component={LoginContainer} />
                <Route path="/search" component={SearchContainer} />
            </Switch>
        </Suspense>
    )
}

export default compose(withPreloadRedirect)(ViewContentControl)