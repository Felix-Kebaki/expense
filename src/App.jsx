import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { History } from "./components/history";
import { Transactions } from "./components/Transactions";

function App() {
  return (
    <main className="MainAtApp">
      <div className="MainDivAtApp">
        <Header />
        <Balance/>
        <History/>
        <Transactions/>
      </div>
    </main>
  );
}

export default App;
