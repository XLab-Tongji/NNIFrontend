import {Menu,Icon,message} from 'antd'
import React from 'react'
import "./css/nni.css"
import axios from "axios";
import storage from '../model/storage';
import PropTypes from "prop-types";


class SideMenu extends React.Component{
    static propTypes={
        isStart:PropTypes.bool.isRequired,
        showInfo:PropTypes.func.isRequired,
        showPrep:PropTypes.func.isRequired,
        showTab2:PropTypes.func.isRequired,
        showTab3:PropTypes.func.isRequired,
        showTab4:PropTypes.func.isRequired,
        userName:PropTypes.string.isRequired
    }

    state={
        key1type:"plus",
        jsonData:[],
        jsonShow:''
    }


    handleClick = e => {
        console.log('click ', e);

    };
    handleInfo=()=>{
        this.props.showInfo()

        // if(this.state.key1type==='plus'){
        //     console.log('click ', e);
        //     this.setState({key1type:'minus'})
        // }else{
        //     this.setState({key1type:'plus'})
        // }



    };

    handlePrep=()=>{
        this.props.showPrep()
    }
    handleTab3=()=>{
        this.props.showTab3()
    }
    handleTab4=()=>{
        this.props.showTab4()
    }
    handleTab2=()=>{
        console.log("tab2")
        const _this=this
        axios({method:'post',
            url:'http://10.60.38.173:1500/trials',
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
            url:'http://10.60.38.173:1500/experiments',
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
        _this.props.showTab2(_this.state.jsonData,_this.state.jsonShow)

    }
    render() {
        const {SubMenu} =Menu
        return(
            <div>
                <Menu

                    onClick={this.handleClick}
                    style={{ width: 200,
                        height:800,
                        overflow: 'auto',
                        position: 'fixed',
                        left: 0,
                        top:50,
                        //overflowedIndicator:""



                        // inlineCollapsed:false

                    }}

                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['1']}
                    mode="inline"
                    theme="light"

                >
                        <Menu.Item onClick={this.handleInfo}
                                   key="1">
                             <span><Icon type="user" /><span>Information</span></span>
                        </Menu.Item>

                        <Menu.Item key="2"
                                   onClick={this.handlePrep}>
                            <span>
                                <Icon type="team" />
                                <span>Preparation</span>
                            </span>
                        </Menu.Item>



                        {/*<Menu.ItemGroup key="g1" title="Item 1">*/}
                        {/*    <Menu.Item*/}
                        {/*                className="ant-menu-item-group-list"*/}
                        {/*               key="1">Option 1</Menu.Item>*/}
                        {/*    <Menu.Item key="2">Option 2</Menu.Item>*/}


                        {/*/!*</Menu.ItemGroup>*!/*/}
                        {/*/!*<Menu.ItemGroup key="g2" title="Item 2">*!/*/}
                        {/*    <Menu.Item key="3">Option 3</Menu.Item>*/}
                        {/*    <Menu.Item key="4">Option 4</Menu.Item>*/}
                        {/*/!*</Menu.ItemGroup>*!/*/}

                    <SubMenu
                        //onTitleClick={this.handleInfo}
                        key="sub3"
                        title={
                            <span>
              <Icon type="user" />
              <span>Experiment</span>
            </span>
                        }

                    >



                            <Menu.Item
                                disabled={!this.props.isStart}
                                onClick={this.handleTab2}
                                key="3">Basic</Menu.Item>
                            <Menu.Item
                                disabled={!this.props.isStart}
                                onClick={this.handleTab3}
                                key="4">Overview</Menu.Item>
                            <Menu.Item
                                disabled={!this.props.isStart}
                                onClick={this.handleTab4}
                                key="5">Details</Menu.Item>



                    </SubMenu>


            {/*        <SubMenu*/}
            {/*            key="sub2"*/}
            {/*            title={*/}
            {/*                <span>*/}
            {/*  <Icon type="appstore" />*/}
            {/*  <span>Navigation Two</span>*/}
            {/*</span>*/}
            {/*            }*/}
            {/*        >*/}
            {/*            <Menu.Item key="5">Option 5</Menu.Item>*/}
            {/*            <Menu.Item key="6">Option 6</Menu.Item>*/}
            {/*            <SubMenu key="sub3" title="Submenu">*/}
            {/*                <Menu.Item key="7">Option 7</Menu.Item>*/}
            {/*                <Menu.Item key="8">Option 8</Menu.Item>*/}
            {/*            </SubMenu>*/}
            {/*        </SubMenu>*/}
            {/*        <SubMenu*/}
            {/*            key="sub4"*/}
            {/*            title={*/}
            {/*                <span>*/}
            {/*  <Icon type="setting" />*/}
            {/*  <span>Navigation Three</span>*/}
            {/*</span>*/}
            {/*            }*/}
            {/*        >*/}
            {/*            <Menu.Item key="9">Option 9</Menu.Item>*/}
            {/*            <Menu.Item key="10">Option 10</Menu.Item>*/}
            {/*            <Menu.Item key="11">Option 11</Menu.Item>*/}
            {/*            <Menu.Item key="12">Option 12</Menu.Item>*/}
            {/*        </SubMenu>*/}
                </Menu>

            </div>
        )
    }
}
export default SideMenu;