import { useState } from "react"

export const AddCategory = ({onAddCartegory}) => {
    const [inputValue, setinputValue] = useState('')

    const handleCahnge = (e)=>{
        setinputValue( value => value = e.target.value);
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length <=1 ) return;
        onAddCartegory(inputValue);
        setinputValue('');
    }
    console.log(inputValue);
    return (
        <form onSubmit={(event)=> onSubmit(event)}>
            <input
                onChange={handleCahnge}
                value={inputValue}
                type="text"
                placeholder="Ingrese categoria"
            />
            {/* <button onClick={agregar}>agregar</button> */}
        </form>
    )
}
