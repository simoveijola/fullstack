import axios from 'axios'
const Url = 'http://localhost:3001/persons'

const getPersons = () => {
    const request = axios.get(Url)
    return request.then(response => response.data)
}

const addPerson = (person) => {
    const request = axios.post(Url, person)
    return request.then(response => response.data)
}

const updateNumber = (id, updatedPerson) => {
    const request = axios.put(`${Url}/${id}`, updatedPerson)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    console.log('delete',id)
    const request = axios.delete(`${Url}/${id}`)
    return request.then(response => response.data)
} 

export default {getPersons, addPerson, updateNumber, deletePerson}