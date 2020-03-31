import  React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';




class Avatar extends Component{

		constructor(){
			super();
			this.state = {
				name : "Welcome to Avatar World"
			}
		}

		namechange(){
			this.setState({
				name : "Subcribe"
			})
		}
		render(){
			const avatarlistarray =[
        {
        	id:1,
        	name:"Muskaan",
        	work:"web developer"
        },
        {
        	id:2,
        	name:"Sahil",
        	work:"UI developer"
        },
        {
        	id:3,
        	name:"Rahul",
        	work:"Backend"
        },
        {
        	id:4,
        	name:"Team",
        	work:"web development"
        }
	]
                 const arraycard=avatarlistarray.map((avatarcard, i)=>{
                 	return <Avatarlist key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
                 }
                 	)
			return( 
				<div className="mainpage">
		<h1> {this.state.name} </h1>
		              {arraycard}
	            <button onClick={ () => this.namechange() }>  Subcribe </button>
	            </div>
	      )
	  }
	}
		
	

	

export default Avatar;
