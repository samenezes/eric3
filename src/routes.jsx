import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PaginaBase from './pages/PaginaBase'
import NotasAdicionadas from './pages/NotasAdicionadas'
import NotasExcluidas from './pages/NotasExcluidas'



function AppRoutes() {

    //const [notas, setNotas] = React.useState([]);

    return (
        <BrowserRouter>
                <Routes>
                <Route path='/' element={ <PaginaBase /> }>  
                    <Route index element={ <Home /> }></Route>
                    <Route path="/notasadicionadas" element={ <NotasAdicionadas /> }></Route>
                    <Route path="/notasexcluidas" element={ <NotasExcluidas /> }></Route>
                </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes