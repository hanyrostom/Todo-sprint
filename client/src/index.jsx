import React from 'react';
import ReactDOM from "react-dom";
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks : [{text:"To get back at Rose and Mandy",status: 'in progress'}, {text:"To relax", status: 'on hold'}]
        }

    }

    componentDidMount(){
        console.log('client here')
        axios.post('/save', 'hello')
             .then(()=>console.log('all good'))
    }

    render(){
        
        return (
            <div>
                <List tasks={this.state.tasks}/>
                
                HELLO
            </div>
        )
    }
}






ReactDOM.render(<App/> , document.getElementById('app'));