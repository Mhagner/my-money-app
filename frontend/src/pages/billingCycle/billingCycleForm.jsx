import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../../common/form/labelAndInput'
import Row from '../../common/template/row'
import Grid from '../../common/layout/grid'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init } from '../billingCycle/billingCycleAction'
import CreditList from './creditList'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit, disabled, submitClass, submitLabel, init } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name'
                        component={LabelAndInput}
                        label='Nome' cols='12 4' placeholder='Informe o nome'
                        disabled={disabled}
                    />
                    <Field name='month'
                        component={LabelAndInput} type='number'
                        label='Mês' cols='12 4' placeholder='Informe o mês'
                        disabled={disabled}
                    />

                    <Field name='year'
                        component={LabelAndInput} type='number'
                        label='Ano' cols='12 4' placeholder='Informe o ano'
                        disabled={disabled}
                    />
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

export default connect(null, mapDispatchToProps)(BillingCycleForm)