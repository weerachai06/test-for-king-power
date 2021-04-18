import { MDBCol, MDBIcon, MDBRow } from 'mdbreact'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Retrieve() {
    const perpage = 5;
    const [datas, setDatas] = React.useState([])
    const [isLoaded, setisLoaded] = React.useState(false)
    const [page, setPage] = React.useState(1);
    const [deletedAll, setDeletedAll] = React.useState(false)
    React.useEffect(() => {
        if (datas.length === 0 && isLoaded === false) {
            const data = JSON.parse(localStorage.getItem('jobs'));
            if (data !== null) {
                const newGroup = data.map((item, index) => {
                    const group = parseInt((index) / perpage)
                    return {
                        ...item,
                        group: group,
                        isChecked: false
                    }
                })
                //etPages(arr)
                setDatas(newGroup)
                setisLoaded(true)
                //setDatas(datas)
            }
        }
        if (isLoaded === false) {
            //setPages(Array(Math.ceil(count)).fill().map((x, i) => i + 1))
            const data = JSON.parse(localStorage.getItem('jobs'));
            if (data !== null) {
                const newGroup = data.map((item, index) => {
                    const group = parseInt((index) / perpage)
                    return {
                        ...item,
                        group: group,
                        isChecked: item.isChecked
                    }
                })
                //etPages(arr)
                setDatas(newGroup)
                setisLoaded(true)
                //setDatas(datas)
            }
            //console.log(datas)
            //console.log(datas.filter((item, index) => index < perpage))
        }

    }, [datas, isLoaded, page])

    const handleDeleted = (id) => {
        const deletedData = datas.filter(item => item.id !== id)
        localStorage.setItem('jobs', JSON.stringify(deletedData));
        const data = deletedData
        if (data !== null) {
            const newGroup = data.map((item, index) => {
                const group = parseInt((index) / perpage)
                return {
                    ...item,
                    group: group,
                    isChecked: item.isChecked
                }
            })
            setDatas(newGroup)
            setisLoaded(false)
        }
    }

    const handleChecked = (id) => {
        const newGroup = datas.map((item, index) => {
            const group = parseInt((index) / perpage)
            return {
                ...item,
                group: group,
                isChecked: (item.id === id) ? !item.isChecked : item.isChecked
            }
        })
        setDatas(newGroup)
        setisLoaded(false)
    }

    const handlePage = (page) => {
        setPage(page)
        setisLoaded(false)
    }

    const handleCheckedAll = () => {

        const newUpdated = datas.map((item, index) => {
            const group = parseInt((index) / perpage)
            return {
                ...item,
                group: group,
                isChecked: item.group === page - 1 ? !item.isChecked : item.isChecked
            }
        })
        setDeletedAll(!deletedAll)
        setDatas(newUpdated)
        setisLoaded(false)
    }

    const handleMultipleDeleted = event => {
        const deletedData = datas.filter(item => item.isChecked === false)
        localStorage.setItem('jobs', JSON.stringify(deletedData));
        const data = deletedData
        if (data !== null) {
            const newGroup = data.map((item, index) => {
                const group = parseInt((index) / perpage)
                return {
                    ...item,
                    group: group,
                    isChecked: item.isChecked
                }
            })
            setDatas(newGroup)
            setisLoaded(false)
            setDeletedAll(false)
        }
    }

    return (
        <div>
            <MDBRow>
                <MDBCol lg="2">
                    <Link className="btn btn-primary" to="/create" ><MDBIcon icon="plus" /> Create.</Link>
                    <button className="btn btn-danger" onClick={handleMultipleDeleted}><MDBIcon icon="trash-alt" /> DELETE</button>
                </MDBCol>
                <MDBCol lg="10">
                    <div style={{ textAlign: 'right' }}>
                        {page === 1 ? '' : <button className={`btn btn-sm btn-primary`} onClick={event => handlePage(page - 1)}>PREV</button>}
                        {Array.from({ length: Math.ceil(datas.length / perpage) }, (x, i) =>
                            <button key={i} className={`btn btn-sm ${(i + 1) === page ? 'btn-success' : 'btn-seccondary'}`} onClick={event => handlePage(i + 1)}>{i + 1}</button>
                        )}
                        {page === Math.ceil(datas.length / perpage) ? '' : <button className={`btn btn-sm btn-primary`} onClick={event => handlePage(page + 1)}>Next</button>}
                    </div>
                </MDBCol>
            </MDBRow>
            <table className="table">
                <thead>

                    <tr>
                        <th scope="col">
                            <div>
                                <input type="checkbox" name="checkedAll" checked={deletedAll} onChange={handleCheckedAll} />
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Nationality</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {datas.filter(item => item.group === page - 1).map((item, index) =>
                        <tr key={index}>
                            <td><input name={item.id} type="checkbox" checked={item.isChecked === true} onChange={event => handleChecked(item.id)} /></td>
                            <td>{item.firstName} {item.lastName}</td>
                            <td>{item.gender}</td>
                            <td>{item.phoneCode} {item.phoneNumber}</td>
                            <td>{item.nationality}</td>
                            <td>
                                <Link className="btn btn-link" to={`/update/${item.id}`} >EDIT</Link> /
                                <button className="btn btn-link" onClick={event => handleDeleted(item.id)}>DELETE</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}
