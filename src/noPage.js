import React from 'react'
import {connect} from 'react-redux'


const NoPage = (props) => (
    <div>
        {props.noPage}
        
    </div>
)

export default connect(state => state.app)(NoPage)