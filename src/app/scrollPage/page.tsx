'use client'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const ScrollPage = () => {
    const listInnerRef = useRef(null);
    const [currPage, setCurrPage] = useState(1); // storing current page number
    const [prevPage, setPrevPage] = useState(0); // storing prev page number
    const [userList, setUserList] = useState<any>([]); // storing list
    const [wasLastList, setWasLastList] = useState(false); // setting a flag to know the last list
    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            console.log('scrollTop', scrollTop);
            console.log('scrollHeight', scrollHeight);
            console.log('clientHeight', clientHeight);
            if (scrollTop + clientHeight === scrollHeight) {
                // This will be triggered after hitting the last element.
                // API call should be made here while implementing pagination.
                setCurrPage(currPage + 1);
            }
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://api.instantwebtools.net/v1/passenger?page=${currPage}&size=10000`
            );
            if (!response.data.data.length) {
                setWasLastList(true);
                return;
            }
            setPrevPage(currPage);
            // debugger
            setUserList([...userList, ...response.data.data]);
        };
        if (!wasLastList && prevPage !== currPage) {
            fetchData();
        }
    }, [currPage, wasLastList, prevPage, userList]);

    console.log('userList', userList);

    return (
        <div
            onScroll={onScroll}
            ref={listInnerRef}
            style={{ height: '400px', overflowY: 'auto' }}
        >
            {userList?.map((data: any, index: any) => (
                <div key={index}> {/* Adding a key prop for list items */}
                    <p>{data.name}</p>
                    <img src={data.airline[0].logo} />
                </div>
            ))}
        </div>
    )
}

export default ScrollPage