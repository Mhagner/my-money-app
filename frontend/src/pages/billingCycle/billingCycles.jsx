import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../../common/template/contenHeader'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import TabHeader from '../../common/tab/tabHeader'
import TabContent from '../../common/tab/tabContent'
import { selectTab, showTabs } from '../../common/tab/tabAction'
import List from './billingCycleList'
import Form from './billingCycleForm'
import { create, update, remove } from './billingCycleAction'


class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader
                    title='Ciclos de pagamento'
                    small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader
                                label='Listar' icon='bars' target='tabList' />
                            <TabHeader
                                label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader
                                label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader
                                label='Exluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form 
                                    onSubmit={this.props.create}
                                    submitClass='primary'
                                    cancelClass='default'
                                    submitLabel='Salvar' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form 
                                    onSubmit={this.props.update}
                                    submitClass='info'
                                    cancelClass='default'
                                    submitLabel='Alterar' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form 
                                    onSubmit={this.props.remove} 
                                    submitClass='danger'
                                    cancelClass='default'
                                    submitLabel='Excluir' 
                                    disabled='true'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)    
