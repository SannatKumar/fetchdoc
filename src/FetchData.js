import {useEffect, useState} from 'react';
const BASEURL = "https://jsonplaceholder.typicode.com/";

function FetchData(extUrl)
{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
  
    useEffect(() => {
        async function fetchMyData()
        {
            try{
                const response = await fetch(BASEURL + extUrl);
                const res = await response.json();
                setItems(res);
            }
            catch(error)
            {
                setError(error);
                setIsLoaded(true);
            }
            finally
            {
                setIsLoaded(true);
            }
        }
        fetchMyData();
    }, [extUrl]); 


    return{items, isLoaded, error};
}

export default FetchData;
