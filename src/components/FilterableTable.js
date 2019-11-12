import React, { useState, useEffect } from 'react';
import { convertHeight } from '../utils';
import toogleIcon from '../assets/toogle-icon.svg';


const FilterableTable = ({ data }) => {

    const [sortType, setSortType] = useState({ field: "", type: "" });
    const [newData, setNewData] = useState(data);


    useEffect(() => {
        setNewData(data)
    }, [data])

    const calculateHeight = () => {
        let heights = newData.map(c => parseInt(c.height, 10));
        let filteredHeights = heights.filter(height => Number.isInteger(height));
        const totalHeight = filteredHeights.reduce((acc, value) => acc + value, 0)
        
        const { valueInInches, valueInFeet } = convertHeight(totalHeight);
        return  `${totalHeight}cm (${valueInFeet.toFixed(2)}ft/${valueInInches.toFixed(2)}in)`;
    }

    const sort = (field, type) => {
        let sortedData;

        if (field === "height") {
            sortedData = data.sort((a, b) =>  parseInt(a.height, 10) - parseInt(b.height, 10));
        } else {
            sortedData = data.sort((a, b) => a[field].localeCompare(b[field]));
        }

        if (type === "desc") {
            sortedData = sortedData.reverse();
        }
    
        setNewData(sortedData);        
        setSortType({ field, type })
    }


    const handlerSort = (e) => {
        const field = e.target.id;
        
        if (sortType.field !== field ) {
            sort(field, "asc");
        } else if(sortType.field === field && sortType.type === "asc") {
            sort(field, "desc");
        }
        else if(sortType.field === field && sortType.type === "desc") {
            sort(field, "asc");
        }
    }

    const sortedBy = (name) => {
        if (sortType.field === name && sortType.type === "asc") {
            return "asc"
        } else if (sortType.field === name && sortType.type === "desc") {
            return "desc"
        } else {
            return "none"
        }
    }

    const handlerGenderFilter = (e) => {
        const selectedGender = e.target.value;
        let result;
    
        if (selectedGender !== "all") {
          result = data.filter((c) => c.gender === selectedGender);
        } else {
          result = data;
        }
        setNewData(result);
        calculateHeight()
    }
    
    return (
        <>
            <div className="custom-select">
               <select onChange={handlerGenderFilter} defaultValue="Select">
                    <option value="all">Filter Gender (All)</option>
                    <option value="male" >Male</option>
                    <option value="female">Female</option>
                    <option value="n/a">N/A</option>
                    <option value="hermaphrodite">Hermaphrodite</option>
                </select>
            </div>
            <table>
                <thead>
                <tr>
                    <th>
                        <button id="name" onClick={handlerSort}  >
                            Name<img src={toogleIcon} height={10} width={10} alt="toggle arrow" data-toggle={sortedBy("name")} />
                        </button>
                    </th>
                    <th>
                        <button id="gender" onClick={handlerSort}>
                            Gender
                            <img src={toogleIcon} height={10} width={10} alt="toogle arrow" data-toggle={sortedBy("gender")} />
                        </button>
                    </th>
                    <th>
                        <button id="height" onClick={handlerSort}>
                            Height(cm)
                            <img src={toogleIcon} height={10} width={10} alt="toogle arrow" data-toggle={sortedBy("height")} />
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                        newData.map(character => (
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
                        { newData.length }
                    </div>
                    </td>
                    <td colSpan="2">
                    <div>
                        <p>Total Height</p>
                        {calculateHeight()}
                    </div>
                    </td>
                </tr>
                </tfoot>
             </table>
        </>
    )
};

export default  FilterableTable;