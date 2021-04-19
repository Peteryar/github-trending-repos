import { useEffect, useState } from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Repo from './components/Repo/Repo';


function App() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=created:>2021-03-19&sort=stars&order=desc&page=${page}`)
      .then(response => response.json())
      .then(data => setRepos(data.items))
  }, [page])
  
  return (
    <div className="App">
      <NavBar paginate={(val) => setPage(page + val)} />
      <main>
        {repos.map((repo, i) => <Repo data={repo} key={i} />)}
      </main>
      <Footer paginate={(val) => setPage(page + val)}/>
    </div>
  );
}

export default App;
