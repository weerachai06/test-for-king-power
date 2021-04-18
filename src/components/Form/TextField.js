import React from 'react'
import { connect } from 'react-redux';
import Camel2Title from '../Camel2Title';

function TextField({ props, dispatch, pattern = { require: false, pattern: null }, value, maxLength = 255, name, onChange, hiddenLabel = false }) {
    const [errState, setErrState] = React.useState('');

    React.useEffect(() => {
        if (pattern.require === true) {
            if (pattern.require === true && value === "") {
                setErrState(`${name} cannot be empty.`)
            } else {
                setErrState(``)
            }
        } else if (pattern.pattern !== null) {
            if ((value.match(new RegExp(pattern.pattern)) === null) === true) {

                setErrState(`${name} is invalid.`)
            } else {
                setErrState(``)
            }
        }
        const errKey = 'Err' + name.charAt(0).toUpperCase() + name.slice(1)
        dispatch({ type: 'STORE_ERR_' + name.toUpperCase(), [errKey]: errState })

    }, [value, pattern, name, props, dispatch, errState])

    return (
        <div className="form-group">
            {(hiddenLabel === false) ? <label htmlFor={name}><Camel2Title string={name} /> <span style={{ color: 'red' }}>{pattern.require === true ? '*' : ''}</span></label> : ''}
            <input
                type="text"
                onChange={onChange}
                className="form-control"
                id={name}
                name={name}
                maxLength={maxLength}
                value={value}
            />
            <span style={{ color: 'red' }}><Camel2Title string={errState} /></span>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        props: state
    }
}

export default connect(mapStateToProps)(TextField)
