import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.css";
import App from "./dragdrop";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
//  return <Component {...pageProps} />
return(
<DndProvider backend={HTML5Backend}>
<App />
</DndProvider>
)
}

export default MyApp
