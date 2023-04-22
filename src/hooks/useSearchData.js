import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { CATEGORIES_API } from "../constants";

const URL = 'https://rickandmortyapi.com/api';

export function useSearchData(query, pageNumber) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [pagesCount, setPagesCount] = useState(1);

    useEffect(() => {
        setData([])
        setPagesCount(1)
    }, [query])

    useEffect(() => {
        setLoading(false);
        setError(false);
        if (pageNumber > pagesCount) return;
  
        axios({
            method: 'GET',
            url: `${URL}/${CATEGORIES_API[query]}`,
            params: {page: pageNumber}
        }).then((res) => {
            setData(prevState => {
                return [...prevState, ...res.data.results]
            })
            setPagesCount(res.data?.info?.pages)
            setHasMore(res.data.results.length > 0);
            setLoading(false)
        }).catch(e => {
            console.error(e)
            setError(true)
        })

    },[query, pageNumber, pagesCount])

    return {
        loading,
        error,
        data,
        hasMore
    }
}