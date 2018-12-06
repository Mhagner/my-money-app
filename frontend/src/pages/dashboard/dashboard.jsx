import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary, getCount, getCountGroups } from './dashboardActions'
import ContentHeader from '../../common/template/contenHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import InfoBox from '../../common/widget/infoBox'
import Grid from '../../common/layout/grid'
import Row from '../../common/template/row'
import SmallBox from '../../common/widget/smallBox'
import UserBox from '../../common/widget/usersBox'
import UserList from '../dashboard/usersList'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
        this.props.getCount()
        this.props.getCountGroups()
    }

    render() {
        const { credit, debt } = this.props.summary
        const { value } = this.props.count
        const { valueGroup } = this.props.countg
        const debtFormated = debt.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        const creditFormated = credit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        const balance = credit - debt
        const balanceFormated = balance.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        const textCycle = (value > 1) ? 'Ciclos' : 'Ciclo'
        return (
            <div>
                <ContentHeader
                    title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox
                            cols='12 4' color='green' icon='bank'
                            value={creditFormated} text='Total de créditos' />
                        <ValueBox
                            cols='12 4' color='red' icon='credit-card'
                            value={debtFormated} text='Total de débitos' />
                        <ValueBox
                            cols='12 4' color='blue' icon='money'
                            value={balanceFormated} text='Total consolidado' />
                    </Row>
                    <Row>
                        <SmallBox
                            cols='12 4' color='aqua' icon='calendar'
                            value={value} text={`${textCycle} de Pagamento`}
                            linkDesc={`Ver ${textCycle}`}
                            link='#billingCycles'
                        />
                        <SmallBox
                            cols='12 4' color='purple' icon='users'
                            value={valueGroup} text='Meus Grupos' linkDesc='Ver grupos'
                            link='#groups'
                        />
                    </Row>
                    {/*
                    <Row>
                        <UserBox
                            cols='12 8'
                            color='danger'
                            title='Membros do Grupo / Recebimento'
                            count='2'
                            text='Membros'
                        >
                            <UserList name='Mahilson Hagnner' descMonth='Março'year='2018'
                                img='https://bit.ly/2Rw4r5a'    
                            />
                        </UserBox >
                    </Row>
                    */}
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {   summary: state.dashboard.summary, 
        count: state.dashboard.count,
        countg: state.dashboard.countg
    }
    )

const mapDispatchProps = dispatch =>
    bindActionCreators({ getSummary, getCount, getCountGroups }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Dashboard)