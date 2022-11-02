import { Center, Spinner } from 'native-base';

export function Loading(): JSX.Element {
  return (
    <Center flex={1}>
      <Spinner color='yellow.500' />
    </Center>
  )
}