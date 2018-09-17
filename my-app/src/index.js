import React from 'react';
import ReactDOM from 'react-dom'




import FormComponent from './FormComponent/FormComponent';
import ControlledForm from './ControlledForm/ControlledForm';
import RemoteData from './APIComponent/RemoteData';




var position = document.getElementById("rootcomponent");
var position2 = document.getElementById("container2");
var position3 = document.getElementById("lifecycle");
var position4 = document.getElementById("commentcomponent");
//var position5 = document.getElementById("actioncomponent");



ReactDOM.render(

    <div>
       <FormComponent></FormComponent>
        <p></p>
         <ControlledForm></ControlledForm>
         <p></p>
         <RemoteData></RemoteData>
    </div>
    , position)





