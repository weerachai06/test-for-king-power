import React from 'react'
import { connect } from 'react-redux';
import Camel2Title from '../Camel2Title';

function DatePicker({ props, dispatch, pattern = { require: false }, value, name, onChange }) {
    const [errState, setErrState] = React.useState('');

    React.useEffect(() => {
        if (pattern.require === true) {
            if (pattern.require === true && value === "") {
                setErrState(`${name} cannot be empty.`)
            } else {
                setErrState(``)
            }
        }
        const errKey = 'Err' + name.charAt(0).toUpperCase() + name.slice(1)
        dispatch({ type: 'STORE_ERR_' + name.toUpperCase(), [errKey]: errState })
    }, [value, pattern, name, props, dispatch, errState])

    return (
        <div className="form-group">
            <label htmlFor={name}><Camel2Title string={name} /> <span style={{ color: 'red' }}>{pattern.require === true ? '*' : ''}</span></label>
            <input
                type="date"
                onChange={onChange}
                className="form-control"
                name={name}
                id={name}
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

export default connect(mapStateToProps)(DatePicker)