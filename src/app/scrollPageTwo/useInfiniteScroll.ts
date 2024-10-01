import { useState, useRef, useCallback, useEffect } from 'react';

function useInfiniteScroll() {
    const [page, setPage] = useState(1);
    const loadMoreRef = useRef(null);

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        console.log('entries', entries);
        const [target] = entries;
        console.log('target', target);
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(handleObserver, option);
        console.log('observer ==>', observer);
        if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    }, [handleObserver]);

    return { loadMoreRef, page };
}

export default useInfiniteScroll;