import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Card from "../Components/Card/Card";

const Home = () => {
	const {
		data: peopleData,
		isLoading,
		isError,
		refetch,
	} = useQuery(["people"], () => {
		return Axios.get("https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json").then((res) => res.data);
	});

	if (isError) {
		return <p>Sorry, there was an error</p>;
	}
	
	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<>
			{
				peopleData?.map((person, i) => {
					return(
						<Card key={i} list={person} />
					)
				})
			}
		</>
	)
}

export default Home