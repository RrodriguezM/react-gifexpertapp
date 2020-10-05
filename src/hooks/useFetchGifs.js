import { useState, useEffect } from "react"
import { GetGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading:true,
    })

    useEffect( ()=> {

        GetGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading:false
                });
            })

    }, [category])

    return state;

}