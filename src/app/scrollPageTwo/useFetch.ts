'use client'
import { useState, useEffect, useCallback } from 'react';
import { Photo } from './type';

function useFetch(page: number) {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState<Photo[]>([]);

    const getPhotos = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://picsum.photos/v2/list?page=${page}&limit=10`
            );
            const data = await response.json();
            setPhotos((prev) => [...prev, ...data]);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    }, [page]);

    useEffect(() => {
        getPhotos();
    }, [getPhotos]);

    return { loading, photos };
}

export default useFetch;