
import ReactDOM from 'react-dom/client';
import './App.css';



function App(){

  let localtime = new Date();
  let diferencia = localtime.getTime()+ (localtime.getTimezoneOffset());
  let horaqatar = new Date(diferencia + (3600000*9))

  
  const root = ReactDOM.createRoot(document.getElementById('root'));
    const element = (
      <div className="App">
        <header className="App-header">
          <h1> La hora es: </h1>
          <h2> México: {new Date().toLocaleTimeString('es-MX')}</h2>
          <h2> Qatar: {horaqatar.toLocaleTimeString('es-Mx')}</h2>

        </header>
      </div>
    );
  root.render(element)
}

export default App;
