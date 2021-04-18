import React from 'react';
import { connect } from 'react-redux';
import Camel2Title from '../Camel2Title';

const citizenID = [
    {
        name: "citizenID0",
        requireLength: 1,
        value: "",
    },
    {
        name: "citizenID1",
        requireLength: 4,
        value: "",
    },
    {
        name: "citizenID2",
        requireLength: 5,
        value: "",
    },
    {
        name: "citizenID3",
        requireLength: 2,
        value: "",
    },
    {
        name: "citizenID4",
        requireLength: 1,
        value: "",
    },
]


function CitizenID({ props, dispatch, pattern = { require: false, pattern: null }, value, maxLength = 255, name, onChange }) {
    const [errState, setErrState] = React.useState('');
    const [citizenIDState, setCitizenID] = React.useState(citizenID);
    const [isLoaded, setIsLoaded] = React.useState(false)
    const inputFocus = [
        React.useRef(null),
        React.useRef(null),
        React.useRef(null),
        React.useRef(null),
        React.useRef(null),
    ];

    const handleCitizenID = (event, index) => {
        const { value } = event.target;
        setCitizenID(previousState =>
            previousState.map((data, j) => {
                return (j === index) ? {
                    ...data,
                    value: value
                } : data;
            })
        )

        //inputFocus[index + 1].current.focus();
    }

    const handleKeyPress = (event, index) => {
        //Backspace
        if (citizenIDState[index].value === "" && event.keyCode === 8) {
            if (index !== 0 && citizenIDState[index].value.length <= 0)
                inputFocus[index - 1].current.focus();
        }

        if (citizenIDState[index].value !== "" && event.keyCode !== 8) {
            if (index !== 4 && citizenIDState[index].value.length >= citizenIDState[index].requireLength)
                inputFocus[index + 1].current.focus();
        }
    }

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
        
        dispatch({ type: "STORE_CITIZENID", citizenID: citizenIDState.map((item) => item.value).join('-') })
        if (props.title !== "" && isLoaded === false) {
            const splitData = props.citizenID.split("-")
            splitData.forEach((item, index) => {
                if (splitData[index] !== "") {
                    setCitizenID(previousState =>
                        previousState.map((data, j) => {
                            return (j === index) ? {
                                ...data,
                                value: item
                            } : data;
                        })
                    )
                    setIsLoaded(true);
                }
            })
        }

    }, [value, pattern, name, onChange, citizenIDState, isLoaded, dispatch, props])

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="mr-4">
                <Camel2Title string={name} />
            </div>
            {
                citizenIDState.map((item, index) =>
                    <div key={item.name} className="mx-1">
                        <input ref={inputFocus[index]} pattern={new RegExp(`[0-9]${maxLength}`)} maxLength={item.requireLength} minLength={item.requireLength} name={item.name} style={{ width: `${item.requireLength * 3}ch`, letterSpacing: '10px' }} id={item.name} onKeyDown={event => handleKeyPress(event, index)} value={item.value} onChange={event => handleCitizenID(event, index)} /> {(index !== citizenID.length - 1) ? '-' : ''}
                    </div>
                )
            }
            {errState}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        props: state
    }
}
export default connect(mapStateToProps)(CitizenID)
