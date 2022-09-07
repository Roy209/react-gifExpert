import { useState } from "react";
import { AddCategory,GridCategory } from "./components";



export const GifExpertApp = () => {

    const [categories, setcategories] = useState([ 'One Puch']);
    const onAddCartegory = (personaje)=>{
        setcategories(categoria => categoria = [personaje,...categoria])
    }

    
    console.log(categories)
    return (
        <>
           
            <h2 className="title">Gif ExpertApp</h2>
            <AddCategory onAddCartegory ={onAddCartegory} />
            <div className="order">
                { 
                    categories.map( ele =>(
                        <GridCategory key={ele} category={ele}/>
                    ))
                }
            </div>
            
           
        </>
    )
}
