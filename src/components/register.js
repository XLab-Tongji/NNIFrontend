import React ,{ Component, Fragment } from 'react'
import { Typography, Input, Icon, Button, Card } from 'antd'
import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import http from '../axios/api'
import './css/register.css'

const { Title } = Typography;


class Register extends Component {


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
  this.props.history.push({pathname:'/'})
 
  

  }

  
  render() {

    return (
<div className='register'  >
 <div className='main'  >

    <Card className='card'  >
        <div className='title'>
        注册
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
           className='Registerbtn'
           size="large" 
           onClick={this.submit}
           >注册</Button>
          </div>

          
         <Link to="/" >
          <div className='detail'>
          登录
          </div>
          </Link>
          
     </Card>
  </div>

 </div>
    )
  }
}
 


export default Register;
