import './App.scss';
import Header from './Components/Header-Footer/Header';
import Footer from './Components/Header-Footer/Footer';
import LeftBar from './Components/LeftBar/LeftBar';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
        <div className='main'>
            <Header />
            <div className='page'>
                <LeftBar />
                <Main />
            </div>
            <Footer />
      </div>
    </div>
  );
}

export default App;
