import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import s from './Users.module.css';

const fields = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'email',
        headerName: 'E-mail',
        width: 100,
    },
    {
        field: 'username',
        headerName: 'Username',
        width: 100,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 100,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 100,
    },
];

const users = [
    { id: 1,email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 2,email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 3,email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 4,email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 5,email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 6, email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 7, email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 8, email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
    { id: 9, email: 'nazik@gmail.com', username:'zvnazar', age: 19, gender: 'M' },
];

const Users = (props)=>{
    return (
        <div className={s.table}>
            <DataGrid
                rows={users}
                columns={fields}
                pageSize={10}
            />
        </div>
    );
};

export default Users;
