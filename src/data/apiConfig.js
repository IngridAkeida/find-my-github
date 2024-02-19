const urlApi = 'https://api.github.com/users/'; 

export const getGithubUser = async (userName) => {
  try {
    const response = await fetch(`${urlApi}${userName}`);

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const json = await response.json();
    console.log(json);
    return json;
    

  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getGithubUserRepos = async (userName) => {
  try {
    const response = await fetch(`${urlApi}${userName}/repos`);

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const json = await response.json();
    console.log(json);
    return json;
    

  } catch (error) {
    console.error(error);
    return null;
    
  }
};


