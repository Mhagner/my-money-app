import React from 'react'

export default props => (
    <div className="box-header">
        <h3 className="box-title">{props.title}</h3>
        <div className="box-tools">
            {props.description}
        </div>
    </div>
)