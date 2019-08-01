import React ,{ Component, Fragment } from 'react'
import { Modal, Button, Table, Card,Row,Col } from 'antd'
import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import http from '../axios/api'
import './css/Tab2.css'
import PropTypes from 'prop-types'



class Tab2 extends Component {
  static propTypes={
    trail:PropTypes.array.isRequired,
    show:PropTypes.object.isRequired,
    userName:PropTypes.string.isRequired
    
  }


  constructor(props){
    super(props);
    this.state={
     
       show:'',
       columns : [
        { title: 'EndTime', dataIndex: 'endTime', key: 'endTime' ,width: 150},
        { title: 'Id', dataIndex: 'id', key: 'id' ,width: 150},
        { title: 'LogPath', dataIndex: 'logPath', key: 'logPath',width: 150 },
        { title: 'SequenceId', dataIndex: 'sequenceId', key: 'sequenceId' ,width:150},
        { title: 'StartTime', dataIndex: 'startTime', key: 'startTime',width: 150 },
        { title: 'Status', dataIndex: 'status', key: 'status',width: 150},
        { title: 'HyperParameters', dataIndex: 'hyperParameters', key: 'hyperParameters' ,width: 150,render : (hyperParameters, record, index)=><Button className='tableButton1' onClick={this.showModel1.bind(this,hyperParameters)}>More</Button>},
        { title: 'FinalMetricData', dataIndex: 'finalMetricData', key: 'finalMetricData' ,render : (finalMetricData, record, index)=><Button className='tableButton2' onClick={this.showModel2.bind(this,finalMetricData)}>More</Button> },
      ],

       trail :[]

    }
    this.info=this.info.bind(this);
   
  }
  

  
/*componentWillMount(){
 this.getShow();
  this.getTrail();
  
}*/
showModel1(hyperParameters){
   Modal.info({
    
    content: (
      <div>
        <p >{hyperParameters.toString()}</p>
      </div>
    ),
    onOk() {},
  });
 
  //alert(hyperParameters.toString())
}
showModel2(finalMetricData){
   Modal.info({
   
    content: (
      <div>
        <p >{JSON.stringify(finalMetricData)}</p>
      </div>
    ),
    onOk() {},
  });
 
  //alert(finalMetricData.toString())
}


/*getShow(){
  http({
    url: '/show',
    method: 'post',
    success: (res)=>{
      this.setState({
       show : res
      })
      console.log(res)
    }
  })    
}

getTrail(){
  http({
    url: '/trialls',
    method: 'post',
    success: (res)=>{
     
      this.setState({
       trail: res
      })
      console.log(res)
    }
  })

}*/



info() {
 
  Modal.info({
    title: 'Details in configuration file',
    content: (
      <div>
        <p className='show-content'>{JSON.stringify(this.props.show)}</p>
      </div>
    ),
    onOk() {},
  });
 
}


  
  render() {
   const{columns}=this.state;
   // const{trail}=this.props;
   console.log('trail===> ',this.props.trail)
   let arr =this.props.trail.map( item => ({endTime:"unknown",finalMetricData:"unknown",...item}));
    return (
<Fragment>
  
  <Card 
  
  title="Experiment show" 
  bordered={false} 
  style={{ width: 1250 }}
  
  >
   <Row gutter={32}>
      <Col className="gutter-row" span={8}>
        <p >Click it to show details in configuration file</p>
      </Col>
      <Col className="gutter-row" span={8}>
        <div>
          <Button  onClick={this.info}>Detail</Button>
       </div>
      </Col>
    
     </Row>
  </Card>,
  

    <Table
    className={"table1"}
    style={{ width: 1250 }}
    columns={columns}
    dataSource={arr}
    pagination={{ pageSize:10 }}
    scroll={{ y:290 }}

  />,



</Fragment>
    )
  }
}
 


export default Tab2;
