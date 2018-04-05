import React from 'react'
import {connect} from 'react-redux'
import {changeHomeTest} from './redux/actions'

const Home = (props) => (
    <h1 onClick={()=>{
        props.changeHomeTest(123)
    }}>{props.home}</h1>
)

export default connect(state => state.app,{changeHomeTest})(Home)