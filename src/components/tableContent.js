import Row from './row'

function TableContent(props){

    const task = props.info,
        exampleTask = [{ 
            id: -1, 
            title: "Name of task", 
            name: "Name of project", 
            comment: "Optional comment", 
            priority: "secondary" 
        }]

    return <>{
        !task || task.length === 0?
            <Row 
                data = { exampleTask }
                deleteFunction = { function(){} }
                exampleTask = { false } 
            />
        :
            <Row 
                data = { task }
                deleteFunction = { props.deleteSignal }
            />
    }</>
}

export default TableContent
