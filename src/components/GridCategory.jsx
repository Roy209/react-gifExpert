import React from 'react'
import { useGifEffect } from '../hooks/useGifEffect';
import { CardImage } from './CardImage';
export const GridCategory = ({ category }) => {
    // const [counter, setcounter] = useState(10);
    const {images, isloading} = useGifEffect(category);
   
    console.log({images, isloading})
    return (
        
        <>
            { isloading ? <p>cargando</p>:(
            <div className='container-grid'>
                <h1 className='title'> {category } </h1>
                <div className='gridImage'>
                    { images.map(img =>(
                        <CardImage key={img.id} {...img } />
                        )) }
                </div>
            </div>

            ) }
            
        </>
        
    )
}
