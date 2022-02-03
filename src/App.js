import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import Orders from "./components/Orders";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className='container'>
        <Prototypes />
        <Orders />
      </div>
    </AppStateProvider>
  );
}

export default App;
