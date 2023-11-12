import {useState, useEffect} from 'react'
import PersonForm from './components/PersonForm.jsx'
import Filter from './components/Filter.jsx'
import Persons from './components/Persons.jsx'
import PersonService from './services/notes.js'
import Notification from './components/Notification.jsx'

const App = () => {

  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [addNotification, setAddNotification] = useState(null)
  const [notificationType, setNotificationType] = useState('')

  const filterPersons = (persons) => {
    return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const addPerson = (newPerson) => {
    
    PersonService.addPerson(newPerson)
      .then(data => {
        console.log('addPerson', data)
        setPersons(persons.concat(data))
        setFilteredPersons(filterPersons(persons.concat(data)))
        setAddNotification(`Added ${data.name}`)
        setNotificationType('add')
        setTimeout(() => { setAddNotification(null); setNotificationType('')}, 5000)
      })
  }

  const deletePerson = (id) => {
    PersonService.deletePerson(id)
      .then(PersonService.getPersons()
        .then(data => {
          setPersons(data)
          setFilteredPersons(filterPersons(data))
        })
      )
  }

  const updateNumber = (updatedPerson) => {
    console.log(updatedPerson)
    PersonService.updateNumber(persons.find(person => person.name === updatedPerson.name).id, updatedPerson)
      .then(returnedPerson => {
        console.log(returnedPerson)
        setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
        setFilteredPersons(filterPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson)))
      })
      .catch(error => {
        setAddNotification(`Information of ${updatedPerson.name} has already been removed from server`)
        setNotificationType('error')
        setPersons(persons.filter(person => person.name !== updatedPerson.name))
        setFilteredPersons(filterPersons(persons.filter(person => person.name !== updatedPerson.name)))
        setTimeout(() => { setAddNotification(null); setNotificationType('') }, 5000)
      }
      )
  } 

  useEffect(() => {
    PersonService.getPersons().then(data => {
      console.log('initLoad', data)
      setPersons(data)
      setFilteredPersons(filterPersons(data))
    })
  }, [])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addNotification} notificationClass={notificationType}/>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} updatePerson={updateNumber} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App
