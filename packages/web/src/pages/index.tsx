interface Props {
  count: number;
}

function Home(props: Props): JSX.Element {

  return (
    <h1>Contagem de bolões {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count');
  const data = await response.json()

  console.log(data)
  return {
    props: {
      count: data.count
    }
  }
}

export default Home;