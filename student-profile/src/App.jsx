import Student from './Student.jsx'

function App() {
  return (
    <div className="app-container">
      <h1>Student Profiles</h1>

      <Student
        name="Anurag Singh"
        course="B.Tech Computer Science"
        college="GIET University"
      />

      <Student
        name="Rahul Kumar"
        course="BCA"
        college="GIET University"
      />
    </div>
  )
}

export default App
