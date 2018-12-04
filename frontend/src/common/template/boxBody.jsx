import React from 'react'

export default props => (
    <div className="box-body no-padding">
        <ul className="users-list clearfix">
            {props.children}
        </ul>
    </div>
)