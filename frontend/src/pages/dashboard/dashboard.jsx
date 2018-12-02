import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary, getCount } from './dashboardActions'
import ContentHeader from '../../common/template/contenHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import InfoBox from '../../common/widget/infoBox'
import Grid from '../../common/layout/grid'
import Row from '../../common/template/row'

class Dashboard extends Component {

    componentWillMount(){
        this.props.getSummary()
        this.props.getCount()
    }

    render() {
        const { credit, debt } = this.props.summary
        const { value } = this.props.count
        const debtFormated = debt.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        const creditFormated = credit.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        const balance = credit - debt
        const balanceFormated = balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return (
            <div>
                <ContentHeader
                    title='Dashboard'small='Versão 1.0'/>
                <Content>
                    <Row>
                        <ValueBox
                            cols='12 4'color='green'icon='bank'
                            value={`${creditFormated}`} text='Total de créditos'/>
                        <ValueBox
                            cols='12 4'color='red'icon='credit-card'
                            value={`${debtFormated}`} text='Total de débitos'/>
                        <ValueBox
                            cols='12 4'color='blue'icon='money'
                            value={`${balanceFormated}`} text='Total consolidado'/>
                    </Row>
                    <Row>
                        <InfoBox
                            cols='12 3' color='blue' icon='check'
                            value={`${value}`} text='Total de Ciclos'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => (
    { summary: state.dashboard.summary, count: state.dashboard.count })

const mapDispatchProps = dispatch => 
    bindActionCreators({ getSummary, getCount }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Dashboard)