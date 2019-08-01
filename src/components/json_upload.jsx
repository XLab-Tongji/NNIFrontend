import React from 'react';
import {Upload, Button, Icon, message,Row,Col} from 'antd';
import axios from 'axios'
import  './css/nni.css'
import PropTypes from "prop-types";

class JSONupload extends React.Component{
    static propTypes={
        getJSON:PropTypes.func.isRequired,
        userName:PropTypes.string.isRequired

    }
    constructor(props){
        super(props)
        this. state = {
            fileList:[],
            // file:{
            //
            // },
            uploading: false,
        }
        this.handleUpload=this.handleUpload.bind(this)
    }


    handleUpload = ()=> {
        console.log("fileList:")
        console.log(this.state.fileList[0])
        const formData = new FormData();
        formData.append('name',this.props.userName)
        formData.append('json',this.state.fileList[0])
        console.log("filedata:")



        this.setState({
            uploading: true,
        });


        const _this=this

        axios({method:'post',
            url:'http://10.60.38.173:1500/json',
            data:formData})
            .then(function (response) {
                console.log("取到数据了吗")
                _this.setState({
                    fileList: [],
                    uploading: false,
                });
                message.success(`Upload the json file successfully`)
                console.log("看一下res内容：")
                console.log(response)
                if(response.status==='0'){
                    _this.props.getJSON()
                }



            })
            .catch(function (error) {
                message.error('Failed to upload the json file')
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
                        <p>Please click the icon to upload the search_space.json file:
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
export default JSONupload;