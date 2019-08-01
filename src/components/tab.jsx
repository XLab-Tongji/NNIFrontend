import React from 'react'
import {Row,Col,Tabs,Card,Switch,message} from 'antd'
import axios from "axios";
import storage from '../model/storage';
import Tab2 from './Tab2'
import Tab1 from './Tab1'
import Tab3 from './Tab3'
import Tab4 from './Tab4'
import "./css/nni.css"
import PropTypes from 'prop-types'


class Tab extends React.Component{
    static propTypes={
        userName:PropTypes.string.isRequired
    }



    constructor(props){
        
        super(props)

        this.state={
            jsonData:[],
            jsonShow:'',
            port:''
            
            // tabKey:'1'
        }
        this.callback = this.callback.bind(this)
        this.getPort=this.getPort.bind(this)


    }

    getPort(port){
        this.setState({port:port})
    }
    callback(key) {
        // this.setState({tabKey:key})



         const _this=this
        console.log(key);

        if(key==='2')
        {
            //message.success("发送信息")
            axios({method:'post',
                url:'http://10.60.38.173:1500/trialls',
                data: {name: _this.props.userName}
            })
                .then(function (response) {
                    console.log(response)
                    //message.success("Trail successfully!")
                    _this.setState({jsonData:response})





                })
                .catch(function (error) {
                    console.log(error)
                    console.log("opps,error")
                    message.error("Stop failed!")

                });




                axios({method:'post',
                url:'http://10.60.38.173:1500/show',
                data: {name: _this.props.userName}
            })
                .then(function (response) {
                    console.log(response)
                    //message.success("Show successfully!")
                    _this.setState({jsonShow:response})




                })
                .catch(function (error) {
                    console.log(error)
                    console.log("opps,error")
                    message.error("Stop failed!")

                });


        }
    }



    render(){
        const { TabPane } = Tabs;

        return(
            <div className="all">
            <div className="Main">
                <Tabs defaultActiveKey="1" onChange={this.callback}
                      style={{top:50, zIndex:"4"} }>
                    <TabPane tab="Tab 1" key="1">
                        <div style={{  padding: '30px'}}>
                            <Tab1 getPort={this.getPort}
                                  userName={this.props.userName}
                            />

                        </div>

                    </TabPane>
                    <TabPane tab="Tab 2" disabled={storage.get('isStart')==='false'} key="2">
                        <div style={{ padding: '30px' }}>
                            <Tab2 trail={this.state.jsonData}
                                  show={this.state.jsonShow}

                            />
                        </div>
                       
                    </TabPane>
                    <TabPane tab="Tab 3" disabled={storage.get('isStart')==='false'} key="3">
                        <div style={{ padding: '30px' }}>
                            {/*<h2>aaa{storage.get('port')}</h2>*/}
                            <Tab3
                                port={storage.get('port')}
                            />

                        </div>



                    </TabPane>
                    <TabPane tab="Tab 4" disabled={storage.get('isStart')==='false'} key="4">
                        <div style={{ padding: '30px' }}>

                            <Tab4
                                port={storage.get('port')}
                                 //port={this.state.port}
                            />

                        </div>



                    </TabPane>
                </Tabs>


                    <div style={{ background: '#ECECEC', padding: '30px' }}>

                    </div>



            </div>
            </div>
        )
    }
}
export default Tab;