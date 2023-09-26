import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ApiVersion } from './components/ApiVersion'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ApiVersion/>
    </QueryClientProvider>
  )
}

export default App
