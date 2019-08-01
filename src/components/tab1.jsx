import React ,{ Component, Fragment } from 'react'
import {Row,Col,Tabs,Card,Switch,message} from 'antd'
import PYupload from './python_upload'
import YMLupload from './yml_upload'
import JSONupload from './json_upload'
import axios from "axios";
import storage from '../model/storage';
import PropTypes from "prop-types";



class Tab1 extends Component {

    static propTypes={
        create:PropTypes.func.isRequired,
        stop:PropTypes.func.isRequired,
        //getPort:PropTypes.func.isRequired,
        userName:PropTypes.string.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {
            isStart: true,
            isRight:true,
            uploadMPY:[],
            uploadYML:false,
            uploadJSON:false
        }


        
        this.onChange = this.onChange.bind(this)
        this.getYML=this.getYML.bind(this)
        this.getMPY=this.getMPY.bind(this)
        this.getJSON=this.getJSON.bind(this)
        this.checkJSON=this.checkJSON.bind(this)
        this.checkMPY=this.checkMPY.bind(this)
        this.checkYML=this.checkYML.bind(this)
        this.handleStart=this.handleStart.bind(this)
        this.handleStop=this.handleStop.bind(this)
    }


    getYML(){
        console.log("get yml")
        this.setState({uploadYML:true})
    }
    getMPY(){
        console.log("get mpy")
        this.checkMPY()
    }
    getJSON(){
        console.log("get json")
        this.setState({uploadJSON:true})
    }
    checkMPY(){
        const _this=this
        axios({
            method: 'get',
            url: 'http://10.60.38.173:1500/py',
            params:{
                name: _this.props.userName
            }
        })
            .then(function (response) {
                console.log(response)
                if(response.status==='0'){
                    _this.setState({uploadMPY:response.pyfilelist})
                }


                console.log(response)



            })
            .catch(function (error) {
                console.log(error)
                //message.error("Start failed!")


            });
    }
    checkYML(){
        const _this=this

        axios({
            method: 'get',
            url: 'http://10.60.38.173:1500/yml',
            params:{
                name: _this.props.userName
            }
        })
            .then(function (response) {
                console.log(response.message)
                if(response.status==='0'){
                    _this.setState({uploadYML:true})
                }


                console.log(response)



            })
            .catch(function (error) {
                console.log(error)
                //message.error("Start failed!")


            });

    }
    checkJSON(){
        const _this=this
        axios({
            method: 'get',
            url: 'http://10.60.38.173:1500/json',
            params:{
                name: _this.props.userName
            }

        })
            .then(function (response) {
                console.log(response.message)
                if(response.status==='0'){
                    _this.setState({uploadJSON:true})
                }


                console.log(response)



            })
            .catch(function (error) {
                console.log(error)
                //message.error("Start failed!")


            });

    }
    handleStart(){
        const _this=this
        axios({
            method: 'post',
            url: 'http://10.60.38.173:1500/start',
            data: {name: _this.props.userName}
        })
            .then(function (response) {


                console.log(response)
                console.log(response.message)

                if (response.status==='0') {
                    message.success("Start successfully!")
                    storage.set(_this.props.userName, 'true')
                    _this.props.create()
                    console.log(response.port)
                    storage.set(_this.props.userName+'port',response.port)
                }else{
                    message.error("Start failed!")
                }


            })
            .catch(function (error) {
                console.log(error)
                message.error("Start failed!")


            });

    }
    handleStop(){
        const _this=this
        axios({method:'post',
            url:'http://10.60.38.173:1500/stop',
            data: {name: _this.props.userName},
        })
            .then(function (response) {


                console.log(response)
                console.log(response.message)


                if(response.status==='0')
                {
                    message.success("Stop successfully!")
                    storage.set(_this.props.userName,'false')
                    storage.set(_this.props.userName+'port','')
                    _this.props.stop()

                }else{
                    message.error("Stop failed!")
                }




            })
            .catch(function (error) {
                console.log(error)
                message.error("Stop failed!")



            });
    }

    onChange(checked) {

        if (checked) {
            if (storage.get(this.props.userName) === 'false') {
                this.handleStart()
                } else if(storage.get(this.props.userName)==='true'){
                    message.error("Start failed！")
                    //storage.set('isStart', 'false')
                }else{
                    message.error("bug")
                }
            }
             //storage.set('isStart','true')


        else {
            //storage.set('isStart','false')
            if(storage.get(this.props.userName)==='true'){
                this.handleStop()
            }
            else if(storage.get(this.props.userName)==='false'){
                message.error("Stop failed!")
                //storage.set('isStart','true')
            }
            else {
                message.error("bug")
            }







        }
    }






    componentDidMount() {
        this.checkJSON()
        this.checkMPY()
        this.checkYML()





        if(storage.get(this.props.userName)==='true')
        {
            // this.setState({isStart:true})
            message.success("There are experiments running!")
        }
        else if(storage.get(this.props.userName)==='false'){
            // this.setState({isStart:false})
            message.success("There is no experiment running!")
        }else{
            storage.set(this.props.userName,'false')
        }

    }
    render() {
        const array=this.state.uploadMPY.map( item => (item+' '))
        return (


                <div>
                    <Card title={array.length===0?"Python files have not been uploaded":"Python files have been uploaded:"+array}
                    bordered={false} style={{ width: 1250 }}>

                        <PYupload getMPY={this.getMPY}
                                  userName={this.props.userName}
                        />


                    </Card>
                    <p></p>
                    <Card title={this.state.uploadYML?"The yml file has been uploaded":"The yml file has not been uploaded"}
                     bordered={false} style={{ width: 1250 }}>

                        <YMLupload getYML={this.getYML}
                                   userName={this.props.userName}
                        />


                    </Card>
                    <p></p>
                    <Card title={this.state.uploadJSON?"The json file has been uploaded":"The json file has not been uploaded"} 
                    bordered={false} style={{ width: 1250 }}>

                        <JSONupload getJSON={this.getJSON}
                                    userName={this.props.userName}
                        />


                    </Card>
                    <p></p>
                    <Card  bordered={false} style={{ width: 1250 }}>

                        <Row gutter={24}>
                            <Col span={21}>
                                <p>
                                    Start/Stop the experiment.
                                </p>
                            </Col>
                            <Col span={3}>
                                <Switch defaultChecked={storage.get(this.props.userName)==='true'?true:false}
                                disabled={!(this.state.uploadMPY.length!=0&&this.state.uploadJSON&&
                                    this.state.uploadYML)}
                                onChange={this.onChange}/>

                            </Col>
                        </Row>



                    </Card>
                </div>


        )
    }

}
export default Tab1