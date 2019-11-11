import React from 'react';
import { convertHeight } from '../utils';


const FilterableTable = ({ data }) => {

    let heights = data.map(c => parseInt(c.height, 10));
    let filteredHeights = heights.filter(height => Number.isInteger(height));
    const totalHeight = filteredHeights.reduce((acc, value) => acc + value, 0)
    
    const { valueInInches, valueInFeet } = convertHeight(totalHeight);
    const formattedHeight = `${totalHeight}cm (${valueInFeet.toFixed(2)}ft/${valueInInches.toFixed(2)})in`;
    
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
                        {formattedHeight}
                    </div>
                    </td>
                </tr>
                </tfoot>
             </table>
        </div>
    )
};

export default  FilterableTable;