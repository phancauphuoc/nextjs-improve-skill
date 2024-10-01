import React from 'react'
import { useForm, UseFormRegister } from 'react-hook-form'
import { Inputs } from './page'

interface FormDetailUserProps {
    register: UseFormRegister<any>; // Adjust the type to reflect that it's a function
}

const FormDetailUser = ({ register }: FormDetailUserProps) => {

    return (
        <input defaultValue="11" {...register("age")} />
    )
}

export default FormDetailUser