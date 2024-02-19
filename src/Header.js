const Header = ({userData}) => {

  return (
    <header>
      <div>
        <div>
          <img src={userData.avatar_url} alt={userData.name}/>
          <h2>{userData.name}</h2>
          <h3>{userData.login}</h3>
          <div >{userData.bio}</div>
          <div>{userData.location}</div> 
          <div>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
          </div> 
        </div>     
      </div>
    </header>
  );
}

export default Header;

