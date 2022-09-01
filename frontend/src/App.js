import Cart from "./components/Cart";
import Details from "./components/Details";
import { TrackerProvider } from "./contexts/tracker";

 
function App() {
  return (
    <TrackerProvider>
      <div className="mx-auto justify-between h-screen p-64">
        <div className="flex flex-col md:flex-row gap-6">
          <Cart/>
          <Details/>
        </div>
       </div>
    </TrackerProvider>
  );
}

export default App;
