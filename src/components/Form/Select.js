import React from 'react'
import { connect } from 'react-redux';
import Camel2Title from '../Camel2Title';

function Select({ props, dispatch, pattern = { require: false }, data = [], name, onChange, value, hiddenLabel = false }) {
    const [errState, setErrState] = React.useState('');

    React.useEffect(() => {
        if (pattern.require === true) {
            if (pattern.require === true && value === "DEFAULT") {
                setErrState(`${name} cannot be empty.`)
            } else {
                setErrState(``)
            }
        }
        const errKey = 'Err' + name.charAt(0).toUpperCase() + name.slice(1)
        dispatch({ type: 'STORE_ERR_' + name.toUpperCase(), [errKey]: errState })
    }, [value, pattern, name, errState, props, dispatch])

    return (
        <div className="form-group">
            {(hiddenLabel === false) ? <label htmlFor={name}><Camel2Title string={name} /><span style={{ color: 'red' }}>{pattern.require === true ? '*' : ''}</span></label> : ''}
            <select name={name} id={name} value={value} onChange={onChange} className="browser-default custom-select">
                <option value="DEFAULT">=== Please Select ===</option>
                {data.map((item, index) =>
                    <option value={item.value} key={index}>{item.display}</option>
                )}
            </select>
            <span style={{ color: 'red' }}><Camel2Title string={errState} /></span>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        props: state
    }
}

export default connect(mapStateToProps)(Select);