import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../../common/form/labelAndInput'
import Row from '../../common/template/row'
import Grid from '../../common/layout/grid'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init } from '../billingCycle/billingCycleAction'
import ItemList from './itemList'
import Summary from '../billingCycle/summary'

class BillingCycleForm extends Component {

    calculateSummary(){
        const sum = (t, v) => t + v
        return{
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebits: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { credits, debts, handleSubmit, disabled, 
            submitClass, submitLabel, init, readOnly } = this.props
        const { sumOfCredits, sumOfDebits } = this.calculateSummary()
        const sumCreditsFormated = sumOfCredits.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        const sumDebtsFormated = sumOfDebits.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        const balance = sumOfCredits - sumOfDebits
        const balanceFormated = balance.toLocaleString('pt-br', {style: 'currency', currency: 'BRL' })

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name'
                        component={LabelAndInput}
                        label='Nome' cols='12 4' placeholder='Informe o nome'
                        disabled={disabled} readOnly={readOnly}
                    />
                    <Field name='month'
                        component={LabelAndInput} type='number'
                        label='Mês' cols='12 4' placeholder='Informe o mês'
                        disabled={disabled} readOnly={readOnly}
                    />

                    <Field name='year'
                        component={LabelAndInput} type='number'
                        label='Ano' cols='12 4' placeholder='Informe o ano'
                        disabled={disabled} readOnly={readOnly}
                    />
                    <Summary 
                        credit={sumCreditsFormated} 
                        debt={sumDebtsFormated} 
                        balance={balanceFormated} 
                     />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        item='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        item='debts' legend='Débitos' showStatus={true}/>
                </div>

                <div className='box-footer'>
                    <button
                        type='submit'
                        className={`btn btn-${submitClass}`}>
                        {submitLabel}
                    </button>
                    <button
                        type='button'
                        className='btn btn-default'
                        onClick={init}>Cancelar
                    </button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ 
        credits: selector(state, 'credits'),
        debts: selector(state, 'debts')
    })
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)