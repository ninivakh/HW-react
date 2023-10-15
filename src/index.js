import React from "react";
import ReactDOM from "react-dom/client";
import Apl from "./Apl";

class App extends React.Component {
    render() {
        return (
            <Apl />
        );
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);