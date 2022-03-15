import Score from "./Score"

function Students(props) {
  return (
    <div>
      <section className="name">{props.student.name}:</section>
      <section className="bio">{props.student.bio}</section>
      <div className='scores'>Scores:
        <ul>
          {props.student.scores.map(test => <Score key={test.date} test={test} />)}
        </ul>
      </div>
    </div>
  )
}

export default Students