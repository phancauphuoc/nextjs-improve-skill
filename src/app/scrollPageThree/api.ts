import axios from "axios"

const getDataScrollPageThree = async (page: number) => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    return res.data;
}

export const apiScrollPageThree = {
    getDataScrollPageThree
}