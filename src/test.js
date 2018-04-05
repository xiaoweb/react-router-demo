
import React from 'react'
import {connect} from 'react-redux'

const Test = (props)=>(
    <h2>
        test
    </h2>
)

export default connect(state=>state)(Test)