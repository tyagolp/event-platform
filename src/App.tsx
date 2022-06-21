import { gql, useQuery } from "@apollo/client"


const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface ILesson {
  id: string;
  title: string;
}

function App() {

  const { data } = useQuery<{ lessons: ILesson[] }>(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <ul>
      {data?.lessons.map(x => {
        return <li key={x.id}>{x.title}</li>
      })}
      <li></li>
    </ul>
  )
}

export default App
