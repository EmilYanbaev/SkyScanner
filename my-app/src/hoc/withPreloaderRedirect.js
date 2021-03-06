import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';


export const withPreloadRedirect = (Component) => {
    class PreloadRedirectContainer extends React.Component {
        render() {
            let path
            if (this.props.isLogin)
                if (this.props.location.pathname === "/login" || this.props.location.pathname === "/" || this.props.location.pathname === "/SkyScanner")
                    path = "/search"
                else
                    path = this.props.location.pathname;
            else path = "/login";

            let { isLogin, ...passThroughProps } = this.props

            return (<>
                <Component {...passThroughProps} />
                <Redirect to={path} />
            </>)
        }
    }

    const mapStateToProps = (state) => {
        return {
            isLogin: state.auth.isLogin
        }
    }
    return withRouter(connect(mapStateToProps)(PreloadRedirectContainer))
}
