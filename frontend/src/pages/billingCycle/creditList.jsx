import React, { Component } from 'react'
import Grid from '../../common/layout/grid'
import { Field } from 'redux-form'
import Input from '../../common/form/input'


class CreditList extends Component{

    renderRows(){
        return(
            <tr>
                <td><Field name='credits[0].name' component={Input} 
                    placeholder='credito' readOnly={this.props.readOnly}/> </td>

                <td><Field name='credits[0].valor' component={Input} 
                    placeholder='debito' readOnly={this.props.readOnly} /></td>
                <td></td>
            </tr>
        )
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </thead>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList
