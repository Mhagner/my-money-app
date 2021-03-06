import React, { Component } from 'react'
import Grid from '../../common/layout/grid'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from '../../common/form/input'
import If from '../../common/operator/if'
import Row from '../../common/template/row'


class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly)
            this.props.arrayInsert('billingCycleForm', `${this.props.item}`, index, item)
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1)
            this.props.arrayRemove('billingCycleForm', `${this.props.item}`, index)
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            
            <tr key={index}>
                <td><Field name={`${this.props.item}[${index}].name`} component={Input}
                    placeholder='Descrição' readOnly={this.props.readOnly} cols='12' /> </td>

                <td><Field name={`${this.props.item}[${index}].value`} component={Input}
                    placeholder='Valor'  readOnly={this.props.readOnly} cols='12' /></td>
                <If test={this.props.showStatus}>
                    <td><Field name={`${this.props.item}[${index}].status`} component={Input}
                        placeholder='Status'  readOnly={this.props.readOnly} cols='12' /></td>
                </If>
                <td>
                    <button
                        type='button'
                        onClick={() => this.add(index + 1)}
                        className='btn btn-success btn-custom'>
                        <i className='fa fa-plus'></i>
                    </button>
                    <button
                        type='button'
                        onClick={() => this.add(index + 1, item)}
                        className='btn btn-warning btn-custom'>
                        <i className='fa fa-clone'></i>
                    </button>
                    <button
                        type='button'
                        onClick={() => this.remove(index)}
                        className='btn btn-danger btn-custom'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Valor</th>
                                    <If test={this.props.showStatus}>
                                        <th>Status</th>
                                    </If>
                                    <th className='table-actions'>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)

export default connect(null, mapDispatchToProps)(ItemList)
