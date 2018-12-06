import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleAction'
import BoxTable from '../../common/template/boxTable'

class BillingCycleList extends Component {
    //iniciar a lista de dados
    componentWillMount() {
        this.props.getList()
    }

    //metodo para pegar cada registro da lista
    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-default btn-custom'
                        onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil btn-icon'></i>
                    </button>
                    <button className='btn btn-default btn-custom'
                        onClick={() => this.props.showDelete(bc)}>
                        <i className='fa fa-trash-o btn-icon'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <BoxTable cols='12' description='teste'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Mês</th>
                                <th>Ano</th>
                                <th className='table-actions'>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </BoxTable>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getList, showUpdate, showDelete }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)