'use client'
import React from 'react'
import useInfiniteScroll from './useInfiniteScroll';
import useFetch from './useFetch';
import Loader from './loader';
import PhotoCard from './photoCard';
import './style.css'

const scrollPageTwo = () => {
    const { loadMoreRef, page } = useInfiniteScroll();
    console.log('page', page);
    const { loading, photos } = useFetch(page);

    return (
        <>
            <div className="container">
                {photos?.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
            <div style={{ backgroundColor: 'red' }} ref={loadMoreRef}>{loading && <Loader />}</div>
        </>
    )
}

export default scrollPageTwo