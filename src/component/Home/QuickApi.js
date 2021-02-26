import React,{Component} from 'react';
import QuickSearch from './QuickSearch'

const url = "https://febapi.herokuapp.com/mealType";
class QuickApi extends Component{
    
        constructor(){
            super()
                this.state={
                    
                    mealtype:''
                }
        }
        
        render(){
        
            return(
                <QuickSearch Quickdata={this.state.mealtype}/>
            )
        }
        componentDidMount(){
            fetch(url,{method:'GET'})
            
            .then((res) => (res.json()))
            //.then((data) =>{console.log("abc=>",data)})
            .then((data) => this.setState({mealtype:data}))
        }          
}
export default QuickApi;
