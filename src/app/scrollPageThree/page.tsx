'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { apiScrollPageThree } from './api'

const ScrollPageThreePage = () => {
    const [listDataPage, setListDataPage] = useState<any>([]);
    const loadingRef = useRef(null);
    const [page, setPage] = useState<number>(1);

    const getListData = async (page: number) => {
        const dataPage = await apiScrollPageThree.getDataScrollPageThree(page);
        console.log('data', dataPage);
        setListDataPage((prevState: any) => [...prevState, ...dataPage]);
    }

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const [target] = entries;
        console.log('target', target);
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        getListData(page);
    }, [page]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '10px',
            threshold: 0.5,
        }
        console.log('loadingRef.current', loadingRef.current);
        const observer = new IntersectionObserver(handleObserver, options);
        if (loadingRef.current) {
            observer.observe(loadingRef.current);
        }
        return () => {
            if (loadingRef.current) {
                observer.unobserve(loadingRef.current);
            }
        };
    }, [handleObserver]);

    return (
        <>
            {listDataPage?.map((data: any, index: number) => {
                return (
                    <div key={index} style={{ margin: '5px', width: '100%', backgroundColor: '#bdb6b6', borderRadius: '20px', paddingBottom: '1px' }}>
                        <img style={{ width: '100%' }} alt={data.author} src={data.download_url} />
                        <p style={{ marginLeft: '5px' }}>{data.author}</p>
                    </div>
                );
            })}
            <div ref={loadingRef} style={{ height: '20px', backgroundColor: 'red' }}>
                loading...
            </div>
        </>
    )
}

export default ScrollPageThreePage