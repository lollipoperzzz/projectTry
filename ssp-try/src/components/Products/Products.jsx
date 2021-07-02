import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import s from './Products.module.css';

const fields = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 150,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
    },
];

const goods = [
    { id: 1, name: 'Snow', category: 'Jossn', price: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Products = (props)=>{
    return (
        <div className={s.table}>
            <DataGrid
                rows={goods}
                columns={fields}
                pageSize={10}
            />
        </div>
    );
};

export default Products;
