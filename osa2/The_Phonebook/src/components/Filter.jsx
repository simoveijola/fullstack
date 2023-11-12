import { useState } from 'react'

const Filter = ({ persons, setFilteredPersons, filter, setFilter }) => {

    const HandleFilterChange = (e) => {
        console.log(e.target.value)
        setFilter(e.target.value)
        setFilteredPersons(persons.filter(person => person.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    return(
        <div>
            filter shown with
            <input
                value={filter}
                onChange={HandleFilterChange}
            />
        </div>
    )
}

export default Filter