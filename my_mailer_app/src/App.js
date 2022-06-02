import './App.css';
import Header from './components/Header/Header'
import LoginPage from './components/Firstface/login/LoginPage'
import SignUp from './components/Firstface/signUp/SignUp'

function App() {
  return (
    <div className="App">
     <Header/>
     <SignUp/>
     <LoginPage/>
    </div>
  );
}

export default App;
