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
        field: 'description',
        headerName: 'Description',
        width: 200,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 120,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        valueFormatter: (params) => {
            return `${params.value} $`;
        },
    },
];

const goods = [
    { id: 1, name: 'Pants', description:'Shtany za 40 griven', category: 'Clothes', price: 40 },
    { id: 2, name: 'T-shirt', description:'Amazing ARMYANE futbolka', category: 'Clothes', price: 20 },
    { id: 3, name: 'Jacket', description:'Pidzhak', category: 'Clothes', price: 33 },
    { id: 4, name: 'Socks', description:'GUCCI Socks', category: 'Clothes', price: 5 },
    { id: 5, name: 'Lamborghini', description:'Sport car', category: 'Car', price: 150000 },,
    { id: 6, name: 'Lexus', description:'Premium car', category: 'Car', price: 20 },
    { id: 7, name: 'BMW', description:'Takih bol`she ne delayut', category: 'Car', price: 1200 },
    { id: 8, name: 'Xiaomi MI 220 Ultra', description:'Amazing ARMYANE futbolka', category: 'Technologies', price: 20 },
    { id: 9, name: 'OppO', description:'Amazing smartphone', category: 'Clothes', price: 20 },
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
