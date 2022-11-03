import React from "react";



//Parathesis means JSX
const Hello =  () => {
    // return(
    //     <div>
    //     <h1>Hello Roshan Mestri </h1>
    //     </div>
    // )

    return React.createElement(
        'div' ,
         {id: 'Hello' , className: 'dummyClass'} ,
        React.createElement('h1' , null , 'Hello Roshan .....'))
}

export default Hello;