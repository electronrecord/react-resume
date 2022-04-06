export const CustomList = function (prop) {
  return (
    <ul>
      {
        prop.data.map(text => (
          <li key={text}>{text}</li>
        ))
      }
    </ul>
  )
}
