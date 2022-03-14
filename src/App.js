import { QueryClient, QueryClientProvider } from "react-query";
import { Header, Main, Footer } from "./components";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
