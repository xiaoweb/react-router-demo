import React from 'react'
import Bundle from './bundle'

export default asyncModuleFn=>{
    return ()=>(
        <Bundle load={asyncModuleFn}>
            {
                mod=>(
                    mod?mod:<div>加载中。。。</div>
                )
            }
        </Bundle>
    )
}