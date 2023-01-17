import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./STORE/configs";
import PageLoader from "./UI/loaders/page-loader/page-loader";

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = lazy(() => import("./App"))

root.render(
    <React.StrictMode>
    <Provider store={store}>
        <Suspense fallback={<PageLoader/>}>
            <BrowserRouter basename={"/"}>
                <App />
            </BrowserRouter>
        </Suspense>
    </Provider>
    </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
