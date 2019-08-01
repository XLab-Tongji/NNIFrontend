import React ,{ Component, Fragment } from 'react'
import { Card,Avatar,Row,Col } from 'antd'
import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
import './css/pInfo.css'




class PersonalInfo extends Component {

  constructor(props){
    super(props);
    this.state={
     photo:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
     userName:'LiHua',
     gender:'M',
     occupation:'student',
     email:'666@163.com',
     phoneNumber:'5892345'
    }
    
  }
 
  render() {
   const{photo,userName,gender,occupation,email,phoneNumber}=this.state;
    return (
    <div className='bottom1'>
      <div className='bottom2'>
        <Card className='infoCard'>

          <div className='pTitle'>
             Personal Information
          </div>

          <div className='plink-top'></div>

          <Row gutter={16}>
             <Col span={8}>
                <p className='line1'>Photo:</p>
             </Col>
             <Col span={8}>
                <Avatar className='photo'
                 size={49}
                 src={photo} />
             </Col>
         </Row>

          <div className='plink-bottom1'></div>

         <Row gutter={16}>
             <Col span={8}>         
                <p className='line2'>Name:</p>
             </Col>
             <Col span={8}>                       
                <p className='name'>{userName}</p>
             </Col>          
         </Row>        

          <div className='plink-bottom2'></div>

         <Row gutter={16}>
             <Col span={8}>         
                <p className='line3'>Gender:</p>
             </Col>
             <Col span={8}>                       
                <p className='gender'>{gender}</p>
             </Col>          
         </Row> 

          <div className='plink-bottom3'></div>

         <Row gutter={16}>
             <Col span={8}>         
                <p className='line4'>Occupation:</p>
             </Col>
             <Col span={8}>                       
                <p className='occupation'>{occupation}</p>
             </Col>          
         </Row> 

          <div className='plink-bottom4'></div>

         <Row gutter={16}>
             <Col span={8}>         
                <p className='line5'>Email:</p>
             </Col>
             <Col span={8}>                       
                <p className='email'>{email}</p>
             </Col>          
         </Row> 

        <div className='plink-bottom5'></div>

         <Row gutter={16}>
             <Col span={8}>         
                <p className='line6'>PhoneNumber:</p>
             </Col>
             <Col span={8}>                       
                <p className='phoneNumber'>{phoneNumber}</p>
             </Col>          
         </Row>          
          <div className='plink-bottom6'></div>

        </Card>
      </div>
    </div>
    )
  }
}
 


export default PersonalInfo;
