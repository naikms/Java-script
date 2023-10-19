// Immediately Invoked Function Expression (IIFE)


(function chai(){                         //named IIFE
    console.log(`DB Connected`);
}) ();                   // syntax : (function) () for ending one IIFE put ; after execution.

// In Arrow function
( (name) => {                              //Simple IIFE
    console.log(`DB ConnectedTwo ${name}`);
}) ("Naik"); //DB ConnectedTwo Naik


