//life cycle --- State----context----hooks
// 3 fases: Mounting, updating, unmounting

import React from "react";
import { ReactDOM } from "react";


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoriteColor:"azul"}
    }

    static getDerivedStateFromProps(){
        return{favoriteColor: props.favCol}
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoriteColor:"yellow"})
        }, 1000)
    }
    render(){
        return(
            <h1> Mi color favorito es {this.state.favoriteColor}</h1>
        )
    }
}

ReactDOM.render(<Header/>,document.getElementById('root'))