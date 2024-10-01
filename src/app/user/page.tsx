'use client'
import React, { useCallback, useEffect } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import DetailUser from './detailUser/DetailUser';
import FormDetailUser from './FormDetailUser';

export type Inputs = {
    example: string,
    exampleRequired: string,
};

const userPage = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>({
        mode: 'onChange',
        defaultValues: {
            example: 'test2',
            exampleRequired: 'qqq',
        }
    });

    const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
        console.log('data', data);
    }, []);

    useCallback(() => {
        console.log('watch userPage change');
    }, [watch])

    console.log(watch("example"))
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("example")} />
                <FormDetailUser register={register} />
                <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
            <DetailUser watch1={watch} />
        </>
    )
}

export default userPage