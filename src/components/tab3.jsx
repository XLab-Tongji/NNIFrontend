import React ,{ Component, Fragment } from 'react'
import PropTypes from "prop-types";
import {Card} from 'antd'


class Tab3 extends Component {
    static propTypes={
        port:PropTypes.string.isRequired,
    }

    render() {
        return (

            <div>

                <div style={{ background: '#ECECEC',padding: '10px' }}>

                    <div style={{overflow:'hidden'}}>


                        
                            <iframe src={"http://10.60.38.173:"+this.props.port+"/oview"}
                                    width="1100" height="1200" frameBorder="0"
                                // top="-150px"
                                //marginHeight="10"
                                    style={{marginTop:'-56px',marginBottom:'-100px',marginLeft:"-20px"}}


                            >
                                <p>Your browser does not support iframes.</p>
                            </iframe>
                    



                    </div>




                </div>
            </div>


        )
    }

}
export default Tab3