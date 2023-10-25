
const Header = (props) => {
    return (
      <>
        <h1>
          {props.courseName}
        </h1>
      </>
    )
  }
  
  const Course = (props) => {
    return (
      <>
        <Header courseName={props.course.name}/>
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts}/>
      </>
    )
  }
  
  const Content = (props) => {
    return (
      <>
        {props.parts.map(p => 
          <Part part={p}/>
        )}
      </>
    )
  }
  
  const Part = (props) => {
    return(
      <>
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      </>
    )
  }
  
  const Total = (props) => {
    const init = 0
    const sum = props.parts.map(p => p.exercises).reduce((f, s) => {
      console.log(f,s)
      return(f + s)
    },init)
    console.log(sum)
    return (
      <>
        <b>
          total of {sum} exercises
        </b>
      </>
    )
  }

  export default Course