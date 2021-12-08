import { Outlet } from 'react-router';
import Header from './components/Header';
import Layout from './components/Layout';

function App() {
    return (
        <>
            <Header>Header</Header>
            <Outlet />
        </>
    );
}

export default App;
