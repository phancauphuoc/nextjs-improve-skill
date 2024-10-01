import { Button } from 'primereact/button'
import React, { useRef } from 'react'
import { StyleClass } from 'primereact/styleclass';
import { InputText } from 'primereact/inputtext';
import { IMember } from '../../../../types/members';

// interface MembersProps {
//     members: IMember[];
// }

const UserList: any = ({ member }: any) => {

    const toggleBtnRef = useRef<Button>(null);

    console.log('aaa', member);

    return (
        <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
        </div>
    )
}

export default UserList