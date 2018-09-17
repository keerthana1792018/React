import React from 'react';


class ControlledForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            programming:false
        }
        this.handleNameChange=this.handleNameChange.bind(this)
        this.knowProgramming=this.knowProgramming.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }

    handleNameChange(e){
        this.setState({name:e.target.value})
    }

    
    knowProgramming(e){
        this.setState({programming:e.target.checked})
    }

    submitForm(e){
        e.preventDefaule()
        console.log("submitted")
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <h3>Controlled Form</h3> 
                <form onSubmit={this.submitForm}>
                Name :<input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                Know programming: <input 
                type="checkbox" name="programming"
                value={this.state.programming} 
                onChange={this.knowProgramming}
                />
                <button type="Submit">save</button>
                </form>
                </div>
                );
    }
}

export default ControlledForm;