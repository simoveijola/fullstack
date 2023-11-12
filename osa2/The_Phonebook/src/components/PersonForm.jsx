import { useState } from 'react'

const PersonForm = ({persons, updatePerson, addPerson}) => {
    
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (e) => {
        console.log(e.target.value)
        setNewName(e.target.value)
    }
        
    const handleNumberChange = (e) => {
        console.log(e.target.value)
        setNewNumber(e.target.value)
    }
        
    const HandleDuplicate = (e) => {
      console.log(e.target.value)
      e.preventDefault()
      const updatedPerson = {
        name: newName,
        number: newNumber
      }
      window.confirm('${newName} is already added to the phonebook, replace the old number with a new one?') ? 
        updatePerson(updatedPerson) : console.log("kept the old number")
        setNewName('')
        setNewNumber('')
    }
    
    const AddNewPerson = (e) => {
        e.preventDefault()
        const NameObject = {
            name: newName,
            number: newNumber,
        }
        console.log(NameObject)
        addPerson(NameObject)
        setNewName('')
        setNewNumber('')
    }

    return (
      <form>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit" onClick=
            {
            persons.map(p => p.name).includes(newName) ?
            HandleDuplicate : AddNewPerson
            }>
            add
          </button>
        </div>
      </form>
    )
}
  
export default PersonForm