import React from "react";
import Spice from "../components/spice";

const AllSpices = (props) => {
//for each spice in teh array render a Spice component

        return props.spices.map((spice) => <Spice spice={spice} key={spice.id} /> )
};

export default AllSpices;