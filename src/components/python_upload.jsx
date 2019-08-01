import React from 'react';
import {Upload, Button, Icon, message,Row,Col} from 'antd';
import axios from 'axios'
import  './css/nni.css'
import PropTypes from "prop-types";

class PYupload extends React.Component{
    static propTypes={
        getMPY:PropTypes.func.isRequired,
        userName:PropTypes.string.isRequired
    }
    state = {
        fileList:[],
        // file:{
        //
        // },
        uploading: false,
    };

    handleUpload = ()=> {
        console.log("fileList:")
        console.log(this.state.fileList[0])
        const formData = new FormData();
        formData.append('name',this.props.userName)
        formData.append('py',this.state.fileList[0])
        console.log("filedata:")



        this.setState({
            uploading: true,
        });


        const _this=this

        axios({method:'post',
            url:'http://10.60.38.173:1500/py',
            data:formData})
            .then(function (response) {
                console.log("取到数据了吗")
                _this.setState({
                    fileList: [],
                    uploading: false,
                });
                message.success(`Upload the python file successfully`)
                console.log("看一下res内容：")
                console.log(response)
                if(response.status==='0'){
                    _this.props.getMPY()
                }



            })
            .catch(function (error) {
                message.error('Failed to upload the python file')
                _this.setState({
                    uploading:false
                })
                console.log(error)
                console.log("opps,error")
            });

    };






    render() {
        const { uploading, fileList } = this.state;
        const props = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {


                // console.log(file)
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }));
                return false;
            },
            fileList,

        };

        return (
            <div>
                <Row gutter={24}>
                    <Col span={18}>
                        <p>Please click the icon to upload the python file:
                            &nbsp;
                            <Upload {...props}>
                                <a>
                                    <Icon type="upload" className="icon"/>
                                </a>
                            </Upload>
                        </p>


                    </Col>
                    <Col span={6} push={2}>
                        <Button size="large"
                                
                                onClick={this.handleUpload}
                                disabled={fileList.length === 0||fileList.length>1}
                                loading={uploading}
                                style={{ marginTop: 16 }}
                        >
                            {uploading ? 'Uploading' : 'Upload'}
                        </Button>
                    </Col>
                </Row>







            </div>
        );
    }
}
export default PYupload;