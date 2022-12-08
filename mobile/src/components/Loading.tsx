import { Center, Spinner } from "native-base";

type Props = {
  title: string;
}

export function Loading() {
  return (
    <Center flex={1} bg="gray.900">
      <Spinner color="yellow.500" />
    </Center>
  );
}
