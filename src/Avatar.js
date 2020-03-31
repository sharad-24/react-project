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
        	id:2,
        	name:"sharad",
        	work:"web developer"
        },
        {
        	id:1,
        	name:"Sahil",
        	work:"UI developer"
        },
        {
        	id:3,
        	name:"Muskaan",
        	work:"Backend"
        },
        {
        	id:4,
        	name:"Rahul",
        	work:"web development"
        }
	]
                 const arraycard=avatarlistarray.map((avatarcard, i)=>{
                 	return <Avatarlist key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
                 }
                 	)
			return( 
				<div className="mainpage responsive">
		<h1> {this.state.name} </h1>
		              {arraycard}
	            <button onClick={ () => this.namechange() }>  Subcribe </button>
	            </div>
	      )
	  }
	}
		
	

	

export default Avatar;
