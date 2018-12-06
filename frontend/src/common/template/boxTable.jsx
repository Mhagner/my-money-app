import React from 'react'
import Grid from '../../common/layout/grid'
import Row from '../../common/template/row'
import Box from '../../common/template/box'
import BoxHeaderTable from '../../common/template/boxHeaderTable'
import BoxBody from '../../common/template/boxBody'

export default props => (
    <Row>
        <Grid cols={props.cols}>
            <Box>
                <BoxHeaderTable title={props.title}>
                    {props.description}
                </BoxHeaderTable>
                <BoxBody>
                    {props.children}
                </BoxBody>
            </Box>
        </Grid>
    </Row>
)