//import useState hook

import React from "react";
//{ useState } from 'react';

const Form = (props) => {
    return <h1>Spice</h1>
}; 

//({initialSpice, handleSubmit, buttonLabel, history}) => {

    // ////Form Data State//////
    // //initialize the form with initialSpice
    // const [formData, setFormData] = useState(initialSpice);

    // ////function////
    // //standard React form handleChange function
    // const handleChange = (event) => {
    //     setFormData({...formData, [event.target.name]: event.target.value });
    // };
    // //Function to run when form is submitted
    // const handleSubmission = (event) => {
    //     //prevent form refresh
    //     event.preventDefault();
    //     //pass formData to handleSubmit prop function
    //     handleSubmit(formData);
    //     //push user back to main page
    //     history.push("/");
    // }
    // return (
    //     <form class= "form" onSubmit={handleSubmission}>
    //         <input
    //         type="text"
    //         onChange={handleChange}
    //         value={formData.subject}
    //         name="name"
    //         placeholder='Spice Name'
    //         />
    //         <input
    //           type="text"
    //           onChange={handleChange}
    //           value={formData.details}
    //           name="details"
    //           placeholder="Notes"
    //           class="button-primary           
    //         />
            
    //     //     <input
    //     //     type="text"
    //     //     onChange={handleChange}
    //     //     value={formData.img_url}
    //     //     name="img_url"
    //     //     placeholder="Your Image"          
    //     //   />
           
            
            //<input type="submit" value={buttonLabel} />
        //</form>
    //)
//};

export default Form;
