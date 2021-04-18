import React from 'react'
import { connect } from 'react-redux';
import Camel2Title from '../Camel2Title';

function RadioButton({ props, dispatch, pattern = { require: false }, data = [], name, onChange, value }) {
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
    }, [value, pattern, name, props, dispatch, errState])

    return (
        <div className="form-group">
            <label htmlFor={name} className="mr-5"><Camel2Title string={name} /></label>
            {data.map(item =>
                <span key={item}>
                    <input type="radio" name={name} value={item} checked={value === item} className="ml-3" onChange={onChange} /> <Camel2Title string={item} />
                </span>
            )}
            <span style={{ color: 'red' }}><Camel2Title string={errState} /></span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        props: state
    }
}

export default connect(mapStateToProps)(RadioButton)