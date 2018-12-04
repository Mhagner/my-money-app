import React from 'react'

export default props => (
    <div className='box-header with-border'>
        <h3 className="box-title">{props.title}</h3>
        <div className="box-tools pull-right">
            <span className={`label label-${props.color}`}>{props.count} {props.text}</span>
            <button
                type="button"
                className="btn btn-box-tool"
                data-widget="collapse">
                <i className="fa fa-minus"></i>
            </button>
        </div>
    </div>
)