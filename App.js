// import logo from './logo.svg';
import './Components/App.css';
import './Components/Header.css';
import UseEffectAPI from './Components/Index';
import Header from './Components/Header';
import MyForm from './form';
//import ErrorBoundary from './Components/ErrorBoundary';
function App() {
  return (
    <div>

      <MyForm/>
      
      <Header/>
      <UseEffectAPI/>
    </div>
  );
}

export default App;
