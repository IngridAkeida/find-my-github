const Repositories = ({userRepos}) => {
  return (
    <div>
        
        <ul>
          {userRepos.map((repo)=>{
            let createdYear = new Date(repo.created_at);
            <h2>My Repositories</h2>
            return(
            <li key={repo.id}>
              <p>{repo.name}</p>
              <p>{repo.description}</p>
              <p>{createdYear.getFullYear()}</p>
              <p>{repo.language}</p>
              <p>{repo.language_url}</p>
              {repo.homepage && (
              <a href={repo.homepage} rel="external" target="_blank">Click Here</a>)}
            </li>)}
          )}
        </ul>
      </div> 
  );
}

export default Repositories;