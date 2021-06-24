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
    
    const simpleRow = 
        <Row 
            data = { task }
            deleteTask = { props.deleteTask }
        />
        ,
        exampleRow = 
        <Row 
            data = { exampleTask }
            deleteFunction = { function(){} }
            exampleTask = { false } 
        />

    
    return <>
        {
            !task || task.length === 0?
                exampleRow
            :
               simpleRow 
        }
    </>
}

export default TableContent