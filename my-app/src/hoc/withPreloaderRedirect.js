import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';


export const withPreloadRedirect = (Component) => {
    class PreloadRedirectContainer extends React.Component {
        render() {
            let path = (this.props.isLogin)?"/search":"/login";
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
