import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {

    //const [notas, setNotas] = useState([]);
//     const [notasAdicionadas, setNotasAdicionadas] = useState([]);
//   const [Nota, setNota] = useState('');

//   const [mostrarAtivas, setMostrarAtivas] = useState(true);
//   const [mostrarAdicionadas, setMostrarAdicionadas] = useState(false);

    function adicionarNota() {
        if (Nota.trim() !== '') {
          setNotas([...notas, { t: nota, estado: true }]);
          setNota('');
        }
      }
    
      function alterarEstadoNota(num) {
        const novaLista = [...notas]
        novaLista[num].estado = !novaLista[num].estado;
        setNotas(novaLista);
    
        if (novaLista[num].estado) {
          const novaListaAdicionadas = notasAdicionadas.filter((_, i) => i !== num);
          setNotasAdicionadas(novaListaAdicionadas);
        } else {
          const notaMovida = novaLista.splice(num, 1)[0]      
          setNotasAdicionadas([...notasAdicionadas, notaMovida]);
        }
      }
    
      function excluirNota(index) {
        const novaLista = [...notas];
        novaLista.splice(index, 1);
        setNotas(novaLista);
      }

    return (
        <>
            <div className={styles.addcontainer}>
                <p>Adicionar notas</p>
                <div className={styles.form}>
                    <input type="text" placeholder="Escreva uma nota"/>
                    <button type="button" onClick={adicionarNota}>Adicionar</button>
                </div>
                Veja suas notas nas próximas páginas
            </div>
        </>
    )
}

export default Home