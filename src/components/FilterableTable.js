import React from 'react';



const FilterableTable = ({ data }) => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th><div>Name</div></th>
                    <th><div>Gender</div></th>
                    <th><div>Height(cm)</div></th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map(character => (
                            <tr key={character}>
                                <td>{character.name}</td>
                                <td>{character.gender}</td>
                                <td>{character.height}</td>
                            </tr>
                        ))
                    }
                
                </tbody>
                <tfoot>
                <tr>
                    <td>
                    <div>
                        <p>Total Character</p>
                        { data.length }
                    </div>
                    </td>
                    <td></td>
                    <td>
                    <div>
                        <p>Total Height</p>
                        170cm (5ft/6.93in)
                    </div>
                    </td>
                </tr>
                </tfoot>
             </table>
        </div>
    )
};

export default  FilterableTable;