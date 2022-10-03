
import UserContextProvider from './components/Context';
import AppMain from './AppMain';


function App() {
 
  return (
    <UserContextProvider>
    <AppMain/>
    </UserContextProvider>
  );
}

export default App;
