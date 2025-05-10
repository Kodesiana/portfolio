import { Center, Loader } from "@mantine/core";

export default function SuspenseLoader() {
	return (
		<Center h="100vh">
			<Loader color="blue" size="xl" type="bars" />
		</Center>
	);
}
