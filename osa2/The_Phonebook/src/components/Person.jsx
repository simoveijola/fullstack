
import PersonService from '../services/notes'

const Person = ({ person, deletePerson }) => {

    const deleteRequest = (id) => {
        PersonService.getPersons().then(data => {
            console.log('DeletePerson fetch', data)
            const filtered = data.filter(person => person.id === id)
            console.log('DeletePerson filtered', filtered)
            return filtered[0]
        }).then(person => {
            window.confirm(`delete ${person.name}?`) ?
            deletePerson(id) : console.log('delete cancelled')
        })
    }

    return (
        <>
            <li>
                {person.name} {person.number} <button onClick={() => deleteRequest(person.id)}>delete</button>
            </li>
        </>
    )
}

export default Person