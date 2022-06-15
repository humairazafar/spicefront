import React from "react";
import { Link } from "react-router-dom"


const Spice = ({spice}) => {
   
    ////////////////////////
    ///Style Object/////
    ///////////////////////

    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    }
     
    const picStyle = {
        imageSize: "200px",
        width: '30%',
        height: '30%'
    }

    return <div style={div}>
        <Link to={`/spice/${spice.id}`}>
            <h1>{spice.name}</h1>
        </Link>
        <h2>{spice.details}</h2>
        <img style={picStyle} src={spice.img_url} alt="spice" />
    </div>
};

export default Spice;