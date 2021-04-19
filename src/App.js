import { useEffect, useState } from 'react';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Repo from './components/Repo/Repo';


function App() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(0);
  console.log(page)
  // console.log(repos)
  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=created:>2020-03-19&sort=stars&order=desc&page=${page}`)
      .then(response => response.json())
      .then(data => setRepos(data.items))
  }, [page])
  return (
    <div className="App">
      <NavBar incrementPage={() => setPage(page + 1)} />
      <main>
        {repos?.map((repo, i) => <Repo data={repo} key={i} />)}
      </main>
    </div>
  );
}

export default App;
