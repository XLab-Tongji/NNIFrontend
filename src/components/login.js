import React ,{ Component, Fragment } from 'react'
import { Typography, Input, Icon, Button, Card } from 'antd'
import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import http from '../axios/api'
import './css/login.css'




class Login extends Component {


  constructor(props){
    super(props);
    this.state={
     user:'',
     password:'', 
    }
    this.userChange=this.userChange.bind(this);
    this.pwdChange=this.pwdChange.bind(this);
    this.submit=this.submit.bind(this);
  }

  
componentWillMount(){

}

userChange(e){
  this.setState({
     user : e.target.value
    })
  }
pwdChange(e){
  this.setState({
     password : e.target.value
    })
  }
    
submit(){
   const { user } = this.state;
   this.props.history.push({pathname:'/main',state:{user:user}})
   // http({
   //       url: '/login',
   //       method: 'post',
   //       data: {name: user},
   //       success: (res)=>{
   //        this.setState({
   //        data: res
   //       })
   //       console.log(res)
   //       }
   //    });
    axios({
        method: 'GET',
        url: 'http://10.60.38.173:1500/login',
        params:{
            name:user
        }
        // data: {name:user},
    })
        .then(function (response) {

            console.log(response)



        })
        .catch(function (error) {
            console.log(error)



        });
  }

  
  render() {

    return (
<div className='login'  >
 <div className='main'  >

    <Card className='card'  >
        <div className='title'>
        登录
        </div>
        <div className="link-top"></div>
        <br/>
        <br/>
        <br/>
        <Input
           className='input'
            placeholder="用户名"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={this.userChange}
          />
          <br />
          <br />

          <Input.Password
           className='password'
           placeholder="密码" 
           onChange={this.pwdChange}
           />
           <br />
         
          
          <div  style={{ padding: '20px 50px 10px' }}>
          <Button 
           className='Loginbtn'
           size="large" 
           onClick={this.submit}
           >登 录</Button>
          </div>

         
          <div className='detail-1'>
          忘记密码，
          </div>
        
       <Link to="/" >
          <div className='detail-2'>
          找回
          </div>
        </Link>

       <Link to="/register" >
          <div className='detail-3'>
          注册
          </div>
        </Link>
          
     </Card>
  </div>

 </div>
    )
  }
}
 


export default Login;
