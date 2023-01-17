import React from 'react';
import classes from "./layout.module.css"
import Header from "../../COMPONENTS/header/header";

function Layout({component: Component, ...props}) {
    return (
        <div className={classes.layout}>
                <Header />
                <main className={classes.layoutMainContent}>
                    <Component {...props}/>
                </main>
        </div>

    );
}

export default Layout;