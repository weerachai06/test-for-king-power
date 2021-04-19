import { MDBCol, MDBIcon, MDBRow } from 'mdbreact';
import React from 'react'
import DatePicker from './DatePicker';
import RadioButton from './RadioButton';
import Select from './Select';
import TextField from './TextField';
import CitizenID from './CitizenID';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link, Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
const defaultNationality = [];
const defaultPhoneCode = [];


function Index({ Datas, dispatch }) {
    const { id } = useParams()
    const randomId = uuidv4();
    const [nationalityState, setNationality] = React.useState(defaultNationality)
    const [phoneCodeState, setPhoneCode] = React.useState(defaultPhoneCode)
    const [isGetAllData, setIsAllData] = React.useState(true);
    const [isSaved, setIsSaved] = React.useState(false)
    const [getIdParam, setIdParam] = React.useState('');
    React.useEffect(() => {

        if (nationalityState.length === 0 && phoneCodeState.length === 0) {
            axios.get('https://restcountries.eu/rest/v2/all').then(res => {
                setNationality(res.data.map(item => {
                    return {
                        value: item.demonym,
                        display: item.demonym,
                    }
                }))
                setPhoneCode(res.data.map(item => {
                    return {
                        value: '+' + item.callingCodes[0],
                        display: '+' + item.callingCodes[0],
                        flag: item.flag
                    }
                }))
            }).catch(err => console.log(err))
        }

        if (getIdParam === "") {
            console.log(id !== undefined)
            const dataId = (id !== undefined) ? id : randomId;
            setIdParam(dataId)
            setIsAllData(false)
        }

        if (isGetAllData === false) {
            const fetch = JSON.parse(localStorage.getItem('jobs'))
            dispatch({ type: 'STORE_ID', id: getIdParam })
            //console.log(Datas.id)
            const findKey = fetch.find(el => el.id === getIdParam)
            //console.log(findKey)
            if (findKey) {
                //Found 
                const parseDaa = { ...findKey }
                //const parseDaa = { ...findKey }
                Object.keys(parseDaa).forEach(item => {
                    dispatch({ type: 'STORE_' + item.toUpperCase(), [item]: findKey[item] })
                })
            } else {
                //Not found or create data
                Object.keys(Datas).filter(item => (item.match(/^Err/) === null) && item !== "id").forEach(item => {
                    //console.log(item)
                    dispatch({ type: 'STORE_' + item.toUpperCase(), [item]: "" })
                })
            }

            setIsAllData(true)
        }
        //console.log(Datas)

    }, [nationalityState, phoneCodeState, dispatch, getIdParam, isGetAllData, id, Datas, randomId])


    const handleChange = (event) => {
        //console.log(event)
        const { value, name } = event.target;
        dispatch({ type: 'STORE_' + name.toUpperCase(), [name]: value })
    }


    const handleSubmit = (event) => {
        //console.log(uuidv4())
        if ((Datas['ErrFirstName']) || (Datas['ErrLastName']) || (Datas['ErrBirthday']) || (Datas['ErrTitle'] || (Datas['ErrExpectedSalary']))) {
            //setOpen(true)
        } else {
            const newDataForSave = {
                id: Datas.id,
                title: Datas.title,
                firstName: Datas.firstName,
                lastName: Datas.lastName,
                birthday: Datas.birthday,
                nationality: Datas.nationality,
                citizenID: Datas.citizenID,
                gender: Datas.gender,
                phoneCode: Datas.phoneCode,
                phoneNumber: Datas.phoneNumber,
                passportNo: Datas.passportNo,
                expectedSalary: Datas.expectedSalary
            }
            console.clear()
            const str = localStorage.getItem('jobs');
            const oldData = JSON.parse(str);
            const values = [{ ...newDataForSave }];

            const keyOfData = Object.keys(newDataForSave)
            keyOfData.forEach(item => {
                const keyUpperCase = item.toUpperCase()
                dispatch({ type: "CLEAR_" + keyUpperCase })
            })
            //Update Data
            if (oldData !== null) {
                var findKey = oldData.find(el => el.id === Datas.id)
                if (findKey) {
                    const index = oldData.indexOf(findKey)//บรรทัดนี้เวิร์ค

                    const data = oldData.map((item, j) => {
                        return (j === index) ? newDataForSave : item;
                    })
                    localStorage.setItem('jobs', JSON.stringify(data))
                } else {
                    //Created new data.
                    const newObj = values.concat(oldData)
                    localStorage.setItem('jobs', JSON.stringify(newObj))
                }
                setIsSaved(true);
            } else {
                localStorage.setItem('jobs', JSON.stringify(values))
                setIsSaved(true);
            }
        }

    }


    return (
        <>
            <form>
                <Link className="btn btn-primary" to="/"><MDBIcon icon="arrow-circle-left" /> Go back.</Link>
                <MDBRow>
                    <MDBCol sm="12" lg="4">
                        <Select
                            name="title"
                            data={[
                                {
                                    display: 'Mr.',
                                    value: 'Mr.'
                                },
                                {
                                    display: 'Mrs.',
                                    value: 'Mrs.'
                                },
                            ]}
                            value={Datas.title}
                            onChange={handleChange}
                            pattern={{ require: true }}
                        />
                    </MDBCol>
                    <MDBCol sm="12" lg="4">
                        <TextField value={Datas.firstName} name="firstName" pattern={{ require: true }} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol sm="12" lg="4">
                        <TextField value={Datas.lastName} name="lastName" pattern={{ require: true }} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol sm="12" lg="4">
                        <DatePicker value={Datas.birthday} name="birthday" pattern={{ require: true }} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol sm="12" lg="8">
                        <Select
                            name="nationality"
                            data={nationalityState.filter(item => item.display !== "" && item.value !== "")}
                            value={Datas.nationality}
                            onChange={handleChange}
                        />
                    </MDBCol>

                    <MDBCol sm="12" lg="12">
                        <CitizenID name="citizenID" />
                    </MDBCol>

                    <MDBCol sm="12" lg="12">
                        <RadioButton
                            name="gender"
                            value={Datas.gender}
                            data={[
                                'Male',
                                'Female',
                                'UniSex'
                            ]}
                            onChange={handleChange}
                        />
                    </MDBCol>

                    <MDBCol sm="12" lg="8">
                        <MDBRow>
                            <MDBCol lg="2">
                                <label>Mobile Phone</label>
                            </MDBCol>
                            <MDBCol lg="3">
                                <Select
                                    name="phoneCode"
                                    data={phoneCodeState}
                                    value={Datas.phoneCode}
                                    onChange={handleChange}
                                    hiddenLabel={true}
                                />
                            </MDBCol>
                                -
                            <MDBCol lg="5">
                                <TextField value={Datas.phoneNumber} name="phoneNumber" maxLength={11} pattern={{ pattern: "[0-9]{3,11}" }} hiddenLabel={true} onChange={handleChange} />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol sm="12" lg="12">
                        <TextField value={Datas.passportNo} name="passportNo" onChange={handleChange} />
                    </MDBCol>
                    <MDBCol sm="12" lg="12">
                        <TextField value={Datas.expectedSalary} name="expectedSalary" maxLength={10} pattern={{ pattern: "[0-9]{3,10}" }} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol sm="12" lg="12" className="text-center">
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">SUBMIT</button>
                    </MDBCol>
                </MDBRow>

            </form>
            {isSaved === true ? <Redirect to="/" /> : ''}
        </>
    )
}

const mapStateToProps = state => {
    return {
        Datas: state
    }
}
export default connect(mapStateToProps)(Index)