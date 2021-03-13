import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { compose } from "redux"
import { withPreloadRedirect } from "../hoc/withPreloaderRedirect"
import { Preloader } from "./common/Preloader"

const LoginContainer = React.lazy(() => import("./LoginPage/LoginContainer"))
const SearchContainer = React.lazy(()=> import("./SearchPage/SearchContainer"))

const ViewContentControl = (props) => {
    return (
        <Suspense fallback={<Preloader/>} >
            <Switch>
                <Route path="/login" component={LoginContainer} />
                <Route path="/search" component={SearchContainer} />
            </Switch>
        </Suspense>
    )
}

export default compose(withPreloadRedirect)(ViewContentControl)