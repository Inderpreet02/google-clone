import { useEffect, useState } from "react";

const useFetchData = (term) => {
    
    const API_KEY = "AIzaSyBkGjOwcyrpG5ePt2b-Qwz9D5yg1X4fMY4"

    const SEARCH_ID = "c524047d17285d759"

    // const url = " https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures"

    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async() =>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ID}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result);
            })
        }

        fetchData();

    }, [term])

    return { data };
}

export default useFetchData
