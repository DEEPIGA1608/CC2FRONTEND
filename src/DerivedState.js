import React from "react";

class DerivedState extends React.Component {
        constructor(props) {  
            super(props);  
            this.state = {hello: "World"};  
            this.changeState = this.changeState.bind(this)  
         }    
         render() {  
            return (  
               <div>  
                   <h1>ReactJS component's Lifecycle</h1>  
                   <h3>Hello {this.state.hello}</h3>  
                   <button onClick = {this.changeState}>Click Here!</button>          
               </div>  
            );  
         }  
           
         componentDidMount() {  
            console.log('Component Did MOUNT!')  
         }  
         changeState(){  
            this.setState({hello:"hai"});  
         }  
         componentDidUpdate(prevProps, prevState) {  
            console.log('Component Did UPDATE!')  
         }  
         componentWillUnmount() {  
            console.log('Component Will UNMOUNT!')  
         }  
        }
export default DerivedState;  