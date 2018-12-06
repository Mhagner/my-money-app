import React, { Component } from 'react'
import BoxTable from '../../common/template/boxTable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList } from './groupAction'
class GroupList extends Component {
    //iniciar a lista de dados
    componentWillMount(){
        this.props.getList()
    }

    //metodo para pegar cada registro da lista
    renderRows() {
        const list = this.props.list || []
        return list.map(g => (
            <tr key={g._id}>
                <td>{g.description}</td>
                <td>{g.initialDate}</td>
                <td>{g.baseValue}</td>
                <td>{g.valueCorrection}</td>
                <td>{g.dayDue}</td>
                <td>{g.dayConteplation}</td>
                <td>
                    <button className='btn btn-default btn-custom'>
                        <i className='fa fa-pencil btn-icon'></i>
                    </button>
                    <button className='btn btn-default btn-custom'>
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
                                <th>Descrição</th>
                                <th>Data de início</th>
                                <th>Valor base</th>
                                <th>Valor de correção</th>
                                <th>Dia do pagamento</th>
                                <th>Dia de contemplação</th>
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

const mapStateToProps = state => ({list: state.group.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)