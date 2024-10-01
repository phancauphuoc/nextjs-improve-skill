'use client'
import React from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import UserList from './users/UserList';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { getAllMember } from '../../../api';


const TodoList = async () => {

    // const members = await getAllMember();
    const members = 'phuoc'

    return (
        <PrimeReactProvider>
            <UserList members={members} />
        </PrimeReactProvider>
    )
}

export default TodoList