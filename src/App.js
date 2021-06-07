import Filters from './components/Filters/Filters';
import Results from './components/Results/Results';
import SearchField from './components/SearchField/SearchField';
import ResultView from './components/ResultView/ResultView'
import {useSelector, useDispatch } from 'react-redux';



function App() {
  function Body() {
    if (!useSelector((state => state.searchMode)))
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
        <h1 className="logo"><b>Github </b>Jobs</h1>
      </header>
      {Body()}
      <footer className="footer grid-col-2">
        <div className="footer__signature">
          <p>created by <a href="#">Dmitry Pershikov</a> - <a href="https://devChallenges.io">devChallenges.io</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;