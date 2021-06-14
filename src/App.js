import Filters from './components/Filters/Filters';
import Results from './components/Results/Results';
import SearchField from './components/SearchField/SearchField';
import ResultView from './components/ResultView/ResultView'
import {useSelector} from 'react-redux';



function App() {
  const isInSearch = useSelector((state => state.searchMode));
  function Body() {
    if (!isInSearch)
      return <ResultView />
    else
      return (
        <>
          <SearchField />
          <Filters />
          <Results />
        </>
      )
  }

  return (
    <>
      <header className="grid-col-2">
        <h1 className="logo"><b>Jobs </b>viewer</h1>
      </header>
      {Body()}
      <footer className="footer grid-col-2">
        <div className="footer__signature">
          <p>Сделано <a href="https://github.com/Fr1gate" target="_blank" rel="noreferrer">Дмитрием Першиковым</a> - Дизайн взят с <a href="https://devChallenges.io" target="_blank" rel="noreferrer">devChallenges.io</a> - Вакансии запрашиваются с API <a href="https://dev.hh.ru" target="_blank" rel="noreferrer">dev.hh.ru</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;