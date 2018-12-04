import React from 'react'
import Grid from '../../common/layout/grid'
import BoxHeader from '../../common/template/boxHeader'
import BoxBody from '../../common/template/boxBody'

export default props => (
    <Grid cols={props.cols}>
        <div className="box box-danger">
            <BoxHeader
                color={props.color}
                title={props.title}
                count={props.count}
                text={props.text}
            />
            <BoxBody>
                {props.children}
            </BoxBody>
        </div>
    </Grid>
)
