import React, { Component } from 'react'

//componentes
import ContentHeader from '../../common/template/contenHeader'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import TabHeader from '../../common/tab/tabHeader'
import TabContent from '../../common/tab/tabContent'
import GroupList from '../group/groupList'

class Group extends Component {
    render() {
        return (
            <div>
                <ContentHeader
                    title='Meus grupos'
                    small='Cadastro'
                />
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
                                <GroupList />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
                )
            }
        }
        
export default Group