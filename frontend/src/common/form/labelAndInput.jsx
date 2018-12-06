import React from 'react'
import Grid from '../layout/grid'
import If from '../operator/if'

export default props => (
    <Grid cols={props.cols}>
        <label htmlFor={props.name}>
            {props.label}
        </label>
        <div className='form.group'>
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type}
                disabled={props.disabled}>
            </input>
        </div>
    </Grid>
)
