import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toggle} from './components/Toggle';
import {Todo} from './components/Todo';
import {Counter} from './components/Counter';

function App() {
    return(
        <div className="container">
            <div className="row justify-content-center">
                <h1 className='w-100 text-center'>My first react App</h1>
            </div>
            <div className="row justify-content-center">
                <Counter />
                <Toggle />
                <Todo />
            </div>
            
        </div>
    );
}

export default App;