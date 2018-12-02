import React from 'react'
import Grid from '../../common/layout/grid'

export default props => (
    <Grid cols=''>
        <input {...props.input}
            className='form-control'
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            type={props.type}
        />
    </Grid>
)