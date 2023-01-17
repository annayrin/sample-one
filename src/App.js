import './App.css';
import {Route, Routes} from "react-router-dom";
import React, {lazy, Suspense} from 'react';
import PageLoader from "./UI/loaders/page-loader/page-loader";
import Layout from "./HOC/layout/layout";
import 'material-icons/iconfont/material-icons.css';



const HomePage = lazy(() => import("./CONTAINS/home/home-page"))
const ContactUs = lazy(() => import("./CONTAINS/contact-us/contact-us"))
const HowToOrder = lazy(() => import("./CONTAINS/how-to-order/how-to-order"))
const NotFound = lazy(() => import("./CONTAINS/not-found/not-found"))

function App() {

    return (
        <Routes>
            <Route
                path={"/"}
                exact
                element={(
                    <Suspense fallback={<PageLoader/>}>
                        <Layout component={HomePage}/>
                    </Suspense>)}
            />

            <Route
                path={"/contact-us"}
                exact
                element={(
                    <Suspense fallback={<PageLoader/>}>
                        <Layout component={ContactUs}/>
                    </Suspense>
                )}
            />

            <Route
                path={"/how-to-order"}
                exact
                element={(
                    <Suspense fallback={<PageLoader/>}>
                        <Layout component={HowToOrder}/>
                    </Suspense>
                )}
            />

            <Route path={"*"}
                   element={(
                       <Suspense fallback={<PageLoader/>}>
                           <Layout component={NotFound}/>
                       </Suspense>
                   )}
            />
        </Routes>

    );
}

export default App;
