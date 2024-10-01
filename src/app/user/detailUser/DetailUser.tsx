import React, { useCallback, useEffect } from 'react'
import { UseFormWatch } from 'react-hook-form';
import { Inputs } from '../page';

type TypeDetailUser = {
    watch1: UseFormWatch<Inputs>;
}

const DetailUser = ({ watch1 }: TypeDetailUser) => {
    console.log("aa1", watch1("example"))
    useCallback(() => {
        console.log('watch userPage change');
    }, [watch1])

    useEffect(() => {
        console.log('watch userPage change useEffect');
    }, [watch1])
    return (
        <div>DetailUser</div>
    )
}

export default DetailUser