import Person from './Person.jsx'

const Persons = ({ persons, deletePerson }) => {
    console.log(persons)
    return(
      <ul>
        {persons.map(person =>
            <Person key = {person.id} person={person} deletePerson={deletePerson} />
        )}
      </ul>
    )
}

export default Persons