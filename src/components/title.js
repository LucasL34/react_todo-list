function Title(props){
    const { title } = props


    return <>
        <h1 className="text-center my-5 user-select-none">
            { title } 
        </h1>
    </>
}

export default Title