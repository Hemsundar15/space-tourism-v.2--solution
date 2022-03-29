import "../scss/main.scss";

import Header from "../components/layout/Header/Header";
import { Fragment } from "react/cjs/react.production.min";

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Header></Header>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
