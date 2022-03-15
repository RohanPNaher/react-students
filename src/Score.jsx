const Score = (props) => {
  return (
    <li>
      Test date: {props.test.date} - Grade: {props.test.score}
    </li>
  )
}

export default Score