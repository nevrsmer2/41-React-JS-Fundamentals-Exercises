import axios from "axios";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

//Set state, update state, make API request using passed URL, return response data and fetchData function
const UseAxios = () => {
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
        const response = await axios.get(url);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    };
    return { data, fetchData }
};

export default UseAxios;
