import React from 'react'
import Img from '../Image/logo.png'
import './css/HeaderCss.css'
import { Col,Row} from 'antd'
import PropTypes from 'prop-types'



class Head extends React.Component{
    static propTypes={
        userName:PropTypes.string.isRequired
    }
    render(){
        return(
            <div>
                <div >
                    <Row gutter={24}>
                        <Col span={1} >
                            {/*<Row gutter={10}>*/}
                            {/*    <Col span={3}>*/}
                            {/*Logo*/}
                                    <div className="Logo">
                                        <img src={Img} alt="logo" className="LogoImg"/>
                                    </div>
                        </Col>
                        <Col span={5} >
                            {/*Title*/}
                            <div >
                                <h2 className="Title">CernoAI 人工智能平台</h2>
                            </div>
                        </Col>
                        <Col span={13}>
                        </Col>
                        <Col span={5} >
                            {/*UserName*/}
                            <div >
                                <h2 className="userName"> {this.props.userName}</h2>
                            </div>

                        </Col>
                    </Row>





                </div>

            </div>
        )


    }
}
export default Head;