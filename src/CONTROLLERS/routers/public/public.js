import React, {Suspense} from 'react'
import {Route} from "react-router-dom"
import Layout from "../../../HOC/layout/layout";
import PageLoader from "../../../UI/loaders/page-loader/page-loader";

const Public = ({component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={matChProps => (
                <Suspense fallback={<PageLoader />}>
                    <Layout>
                        <Component {...matChProps}/>
                    </Layout>
                </Suspense>

            )}
        />
    )

}

export default Public
