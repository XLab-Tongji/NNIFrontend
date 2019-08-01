import React from 'react'
import Head from './header'
import Tab1  from './tab1'
import Tab2  from './tab2'
import Tab3  from './tab3'
import Tab4  from './tab4'
import PersonalInfo from './pInfo'
import {Row,Col ,Layout,Card} from 'antd'
import SideMenu from './sidebar'
import './css/nni.css'
import './css/HeaderCss.css'
import storage from "../model/storage";


class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showPage:1,
            jsonData:[],
            jsonShow:'',
            isStart:false,

        }
        this.handleCreate=this.handleCreate.bind(this)
        this.handleStop=this.handleStop.bind(this)
        this.showInfo=this.showInfo.bind(this)
        this.showPrep=this.showPrep.bind(this)
        this.showTab2=this.showTab2.bind(this)
        this.showTab3=this.showTab3.bind(this)
        this.showTab4=this.showTab4.bind(this)
    }
    componentDidMount() {
        // storage.set(this.props.location.state.user,'false')
        if(storage.get(this.props.location.state.user)==='true'){
            this.setState({isStart:true})
        }
    }

    showInfo(){
        this.setState({showPage:1})

    }
    showPrep(){
        this.setState({showPage:2})
    }
    showTab2(jsonData,jsonShow){
        this.setState({showPage:3,jsonData:jsonData,jsonShow:jsonShow})
    }
    showTab3(){
        this.setState({showPage:4})
    }
    showTab4(){
        this.setState({showPage:5})
    }
    handleCreate(){
        this.setState({isStart:true})
    }
    handleStop(){
        this.setState({isStart:false})
    }






    render(){
        const {Header, Sider, Content,Footer}=Layout
        const show=this.state.showPage
        const port=this.props.location.state.user+'port'
        console.log(port)
        return(
            <div >
                <Layout>
                    <Header style={{position:"fixed",width:"100%",
                        height:"60px", zIndex:"5", backgroundColor:"#001429"}} >
                        <Head
                            userName={this.props.location.state.user}
                        />
                    </Header>



                    <Layout>
                        <Sider theme="light" >
                            <SideMenu isStart={this.state.isStart}
                                      showInfo={this.showInfo}
                                      showPrep={this.showPrep}
                                      showTab2={this.showTab2}
                                      showTab3={this.showTab3}
                                      showTab4={this.showTab4}
                                      userName={this.props.location.state.user}
                            />
                        </Sider>


                        <Content>
                            <Layout   >
                                <div ><p></p><p></p></div>
                                <div ><p></p><p></p></div>
                                <div ><p></p><p></p></div>
                                <div ><p></p><p></p></div>
                                {
                                    show===1?<PersonalInfo/>:
                                        <div>
                                            {
                                                show===2?
                                                    <div style={{ padding: '30px' }}>
                                                        <Tab1
                                                            create={this.handleCreate}
                                                            stop={this.handleStop}
                                                            userName={this.props.location.state.user}/>
                                                    </div>
                                                    :
                                                    <div>
                                                        {
                                                            show===3?
                                                                <div style={{ padding: '30px' }}>
                                                                    <Tab2
                                                                        userName={this.props.location.state.user}
                                                                        trail={this.state.jsonData}
                                                                        show={this.state.jsonShow}
                                                                    />
                                                                </div>
                                                                :
                                                                <div>
                                                                    {
                                                                        show===4?
                                                                            <div style={{ padding: '30px' }}>
                                                                                <Tab3
                                                                                    port=
                                                                                        {storage.get(port) }
                                                                                />
                                                                            </div>
                                                                            :
                                                                            <div>
                                                                                <div style={{ padding: '30px' }}>

                                                                                    <Tab4 port={storage.get(port) }/>
                                                                                </div>

                                                                            </div>
                                                                    }

                                                                </div>
                                                        }

                                                    </div>
                                            }


                                    </div>

                                }




                            </Layout>



                        </Content>

                    </Layout>
                    
                </Layout>
            </div>

        )


    }
}
export default Main;
{/*<div className="login">*/}
{/*<div className="main">*/}

{/*    <Header/>*/}
{/*    /!*<Row gutter={100}>*!/*/}
{/*    /!*    <Col span={20}>*!/*/}
{/*    <div className="sider">*/}
{/*        <Sider/>*/}
{/*    </div>*/}

{/*        /!*</Col>*!/*/}
{/*        /!*<Col span={80}>*!/*/}
{/*        /!*    <Row span={8}>*!/*/}
{/*                <div >*/}
{/*                    <ButtonArea/>*/}
{/*                </div>*/}

{/*    /!*        </Row>*!/*/}


{/*    /!*    </Col>*!/*/}
{/*    /!*</Row>*!/*/}



{/*    <Row gutter={16}>*/}


{/*        <Col span={8}>*/}
{/*            <div className="JsonArea">*/}
{/*                <JsonArea/>*/}
{/*            </div>*/}
{/*        </Col>*/}
{/*        <Col span={8}>*/}
{/*            <div className="JsonArea2">*/}
{/*                <JsonArea/>*/}
{/*            </div>*/}
{/*        </Col>*/}
{/*    </Row>*/}

{/*</div>*/}
{/*</div>*/}