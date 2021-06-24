
function Input(props){

    const { type, label, id, examplePlaceholder = false } =  props.data

    const randomName = () => { 

        if( !examplePlaceholder ) return;

        const example = examplePlaceholder, 
            limit = example.length,
            n = Math.floor( Math.random() * limit ),
            name = example[n].name

        
        return `Ej: ${name}`
    }

    const handlePlaceHolder = function(){

        if( label.includes("name") || label === "Title"){
            return randomName()
        }else{
            return label
        }
    }

    return <>
        <div className="mb-3">
            <label htmlFor={ id } className="form-label"> { label + ":" } </label> 
            <input id={ id }
                type={ type } 
                className="form-control"
                placeholder={ handlePlaceHolder() } 
                required
                autoComplete="off"
            />
        </div>
    </>
}

export default Input