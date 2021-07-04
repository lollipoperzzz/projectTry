import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import s from './Products.module.css';
import DeleteModal from "../AdminPage/DeleteModal/DeleteModal";
import EditModal from "../AdminPage/EditModal/EditModal";

const fields = [
    { field: 'id', headerName: 'ID', width: 70, headerAlign: 'center', align: 'center' },
    {
        field: 'name',
        headerName: 'Name',
        width: 149,
        headerAlign: 'center',

    },
    {
        field: 'description',
        headerName: 'Description',
        width: 250,
        sortable: false,
        headerAlign: 'center',

    },
    {
        field: 'category',
        headerName: 'Category',
        width: 120,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        headerAlign: 'center',
        align: 'center',
        valueFormatter: (params) => {
            return `$${params.value}`;
        },

    },
    // {
    //     field: 'edit',
    //     headerName: '    ',
    //     width: 100,
    //     sortable: false,
    //     renderCell: (params: GridCellParams) => {
    //         return <EditModal/>
    //     },
    // },
    // {
    //     field: 'delete',
    //     headerName: '      ',
    //     width: 120,
    //     sortable: false,
    //     renderCell: (params: GridCellParams) => {
    //          return <DeleteModal/>
    //     }
    // },
];

const goods = [
    { id: 1, name: 'Pants', description:'Shtany za 40 griven', category: 'Clothes', price: 40 },
    { id: 2, name: 'T-shirt', description:'Amazing ARMYANE futbolka', category: 'Clothes', price: 20 },
    { id: 3, name: 'Jacket', description:'Pidzhak', category: 'Clothes', price: 33 },
    { id: 4, name: 'Socks', description:'GUCCI Socks', category: 'Clothes', price: 5 },
    { id: 5, name: 'Lamborghini', description:'Sport car', category: 'Car', price: 150000 },,
    { id: 6, name: 'Lexus', description:'Premium car', category: 'Car', price: 20 },
    { id: 7, name: 'BMW', description:'Takih bol`she ne delayut', category: 'Car', price: 1200 },
    { id: 8, name: 'Xiaomi MI 220 Ultra', description:'Smartphone', category: 'Technologies', price: 20 },
    { id: 9, name: 'OppO', description:'Amazing smartphone', category: 'Clothes', price: 20 },
];

const Products = (props)=>{
    return (
        <div className={s.table}>
            <DataGrid
                rows={goods}
                columns={fields}
                pageSize={10}
                disableColumnMenu={true}
            />
        </div>
    );
};

export default Products;
