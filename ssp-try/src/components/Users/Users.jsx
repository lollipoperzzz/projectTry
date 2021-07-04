import * as React from 'react';
import {DataGrid, GridToolbarContainer, GridToolbarFilterButton} from '@material-ui/data-grid';
import s from './Users.module.css';
import {GridCellParams} from "@material-ui/data-grid";
import DeleteModal from "../AdminPage/DeleteModal/DeleteModal";
import EditModal from "../AdminPage/EditModal/EditModal";

const fields = [
    { field: 'id', headerName: 'ID', width: 70,  headerAlign: 'center', align: 'center', },
    {
        field: 'email',
        headerName: 'E-mail',
        width: 200,
        headerAlign: 'center',

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
    {
        field: 'edit',
        headerName: '    ',
        width: 100,
        sortable: false,

        renderCell: (params: GridCellParams) => {
            const userIndex = users.findIndex((obj) => obj.id === params.id);
            return <EditModal user={users[userIndex]} />;
        }

    },
    {
        field: 'delete',
        headerName: '      ',
        width: 120,
        sortable: false,
        renderCell: (params: GridCellParams) => (
            <DeleteModal/>
        ),
    },
];

const users = [
    { id: 1,email: 'zabolotnyi.n@gmail.com', username:'nazarii', age: 19, gender: 'M' },
    { id: 2,email: 'anna8855@gmail.com', username:'annet_115', age: 19, gender: 'F' },
    { id: 3,email: 'vrvr99@gmail.com', username:'varvara99', age: 22, gender: 'F' },
    { id: 4,email: 'freewqq12@gmail.com', username:'user789', age: 15, gender: 'M' },
    { id: 5,email: 'random@gmail.com', username:'rndmguy', age: 18, gender: 'M' },
    { id: 6, email: 'notrandom@gmail.com', username:'ntrndmgirl', age: 35, gender: 'F' },
    { id: 7, email: 'pochta45@gmail.com', username:'maxmax', age: 28, gender: 'M' },
    { id: 8, email: 'nevermindk@gmail.com', username:'aleX', age: 17, gender: 'M' },
    { id: 9, email: 'mm887@gmail.com', username:'marina887', age: 25, gender: 'F' },
    { id: 10, email: 'ddkaba11@gmail.com', username:'kabargin', age: 55, gender: 'M' },
    { id: 11, email: 'vasek@mail.ru', username: 'sswwqqaa', age: 12, gender: 'F' },
];
function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarFilterButton />
        </GridToolbarContainer>
    );
}

const Users = ()=>{
    return (
        <div className={s.table}>
            <DataGrid
                rows={users}
                columns={fields}
                pageSize={10}
                components={{
                    Toolbar: CustomToolbar,
                }}
                disableColumnMenu={true}
            />
        </div>
    );
};

export default Users;
