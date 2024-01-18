import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(){
    return(<div className = "navbar">
        <Link to = "/"><h1>angela</h1></Link>
        <Link to = "/"><h1>yang</h1></Link>
    </div>)
}