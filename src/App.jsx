import './App.css'
import { Foodlist } from './components/foodListHandler';
import { Footer } from './components/footerHandler';
import { Header } from './components/headerHandler';

function App() {
   return (
    <>
      <Header />
      <Foodlist />
      <Footer />
    </>
  );
}

export default App
