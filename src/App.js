import './App.scss';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from './Pages/Home';
function App() {

	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<div className="App">
			<QueryClientProvider client={client}>
				<div className="container">
					<div className="row">
						<Home />
					</div>
				</div>
			</QueryClientProvider>
		</div>
	);
}

export default App;
