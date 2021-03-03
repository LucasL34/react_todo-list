import TableContent from './tableContent.js';

function Table(){
    return(
        <table className="table table-dark">
            <thead> 
                <tr>
                    <th scope="col"> Title </th>
                    <th scope="col"> Project name </th>
                    <th scope="col"> Comment </th>
                    <th scope="col">  </th>
                </tr>
            </thead>
            <tbody>
                <TableContent />
            </tbody>
        </table>
    );
}

export default Table;