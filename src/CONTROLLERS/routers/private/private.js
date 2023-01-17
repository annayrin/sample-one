import React, {Suspense} from 'react'
import {Redirect, Route} from "react-router-dom";
import PageLoader from "../../../COMPONENTS/UI-components/loaders/page-loader/page-loader";
import Layout from "../../../HOC/layout/layout";

const Private = ({auth, component: Component, ...rest}) => {

    if (auth) {
        return (
            <Route
                {...rest}
                render={matChProps => (
                    <Suspense fallback={<PageLoader/>}>
                        <Layout>
                            <Component {...matChProps}/>
                        </Layout>
                    </Suspense>
                )}
            />
        )
    } else {
        return <Redirect to={"/sign/in"}/>
    }
}

export default Private
