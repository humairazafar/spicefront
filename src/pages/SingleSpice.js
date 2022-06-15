
import React from "react";
import { Link } from 'react-router-dom';


//destructuring the props needed to get our post, including router props match

const SingleSpice = ({ spices, match }) => {
    const id = parseInt(match.params.id);
    const spice = spices.find((spice) => spice.id === id);

    /////////////////////////
    ////style///////////////
    ///////////////////////
   
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    };
   
   
    return (
        <div style={div}>
            <h1>{spice.name}</h1>
             <h2>{spice.details}</h2>
              <img src={spice.img_url} style={{width: "50%", height: "50%"}} alt="spice" />
                <br />
               <Link to="/">
                   <button>Go Back</button>
               </Link>
        </div>
    );
};

export default SingleSpice;
