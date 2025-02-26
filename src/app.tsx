import './app.css'
import './styles/global.css'
import {BrowserRouter} from "react-router-dom";
import Layout from "./layout/layout";
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        window.location.href="https://www.rhea.finance/"
    }, [])
    return null;
    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    )
}

export default App
