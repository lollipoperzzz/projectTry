import * as React from 'react';
import { DataGrid, GridColDef} from '@material-ui/data-grid';
import s from './Users.module.css';
import {number} from "prop-types";

const fields = [
    { field: 'id', headerName: 'ID', width: 70,  headerAlign: 'center', },
    {
        field: 'email',
        headerName: 'E-mail',
        width: 200,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'username',
        headerName: 'Username',
        width: 150,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 110,
        headerAlign: 'center',
        align: 'center',
    },
];

const users = [
    { id: 1,email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 2,email: 'anna8855@gmail.com', username:'annet_115', age: 19, gender: 'M' },
    { id: 3,email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 4,email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 5,email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 6, email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 7, email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 8, email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 9, email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
];

const Users = ()=>{
    return (
        <div className={s.table}>
            <DataGrid
                rows={users}
                columns={fields}
                pageSize={10}
                disableColumnMenu={true}
            />
        </div>
    );
};

export default Users;
