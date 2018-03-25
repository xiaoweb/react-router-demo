import React, { Component } from 'react'

class Bundle extends Component {
    constructor(props){
        super(props)
        this.state = {
            mod:null
        }
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        })
        props.load().then(mod=>{
            let Comontent = mod.default ? mod.default : mod;
            this.setState({
                // handle both es imports and cjs
                mod:mod?<Comontent />:null
            })
        })
    }

    render() {
        return this.props.children(this.state.mod)
    }
}

export default Bundle