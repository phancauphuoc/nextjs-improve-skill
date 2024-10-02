'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { apiScrollPageThree } from './api'

const ScrollPageThreePage = () => {
    const [listDataPage, setListDataPage] = useState<any[]>([]);
    const loadingRef = useRef(null);
    const [page, setPage] = useState<number>(1);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const getListData = async (page: number) => {
        setIsFetching(true);
        try {
            const dataPage = await apiScrollPageThree.getDataScrollPageThree(page);
            setListDataPage((prevState) => [...prevState, ...dataPage]);
        } catch (error) {
            console.error('Failed to load data:', error);
        } finally {
            setIsFetching(false);
        }
    };

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        const [target] = entries;
        if (target.isIntersecting && !isFetching) {
            setPage((prev) => prev + 1);
        }
    }, [isFetching]);

    useEffect(() => {
        getListData(page);
    }, [page]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '10px',
            threshold: 0.5,
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loadingRef.current) {
            observer.observe(loadingRef.current);
        }
        return () => {
            if (loadingRef.current) {
                observer.unobserve(loadingRef.current);
            }
        };
    }, [handleObserver, loadingRef]);

    return (
        <>
            {listDataPage.map((data, index) => (
                <div key={index} style={{ margin: '5px', width: '100%', backgroundColor: '#bdb6b6', borderRadius: '20px', paddingBottom: '1px' }}>
                    <img style={{ width: '100%' }} alt={data.author} src={data.download_url} />
                    <p style={{ marginLeft: '5px' }}>{data.author}</p>
                </div>
            ))}
            <div ref={loadingRef} style={{ height: '20px', backgroundColor: 'red' }}>
                loading...
            </div>
        </>
    );
};


export default ScrollPageThreePage