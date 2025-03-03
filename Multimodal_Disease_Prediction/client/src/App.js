
import { AuthProvider } from "./Auth/AuthContext";
import { Toaster } from 'react-hot-toast';
import { Controller } from "./Auth/Controller";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Controller/>
        <Toaster
                position="top-center"
                reverseOrder={false}
            />
      </AuthProvider>

    </div>
  );
}

export default App;
