import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";


export const useGifEffect = (category)=>{
   
    const [images, setimages] = useState([])
    const [isloading, setisloading] = useState(true)
    
    const getImages = async()=>{
        
        const data = await getGif(category);
        setimages(data);
        setisloading(false)
        
    }

    useEffect( ()=>{
        getImages();
    },[])

    return { images, isloading }
}