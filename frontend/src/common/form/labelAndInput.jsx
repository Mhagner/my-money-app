import React from 'react'
import Grid from '../layout/grid'
import If from '../operator/if'

export default props => (
    <Grid cols={props.cols}>
        <label htmlFor={props.name}>
            {props.label}
        </label>
        <div className={(props.visible)?'input-group':'form.group'}>
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type}
                disabled={props.disabled}>
            </input>
            <If test={props.visible}>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                        <i className='fa fa-calendar'></i>
                    </button>
                </span>
            </If>
        </div>
    </Grid>
)
