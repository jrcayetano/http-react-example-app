import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from '@sentry/browser';
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
Sentry.init({
    dsn: "https://ae3908e9e56347589f2de816019962fd@sentry.io/1304582"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
