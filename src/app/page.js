"use client"


import { useState, useEffect } from 'react';

import { getGithubUser, getGithubUserRepos } from "@/data/apiConfig";
import Header from '@/Header';
import Repositories from '@/Repositories';
import Search from '@/Search';



const userDefault = '';

const Home = () => {
  const [userData, setUserData] = useState(userDefault);
  const [userRepos, setUserRepos] = useState([]);
  const [searchName, setSearchName] = useState('');
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getGithubUser(userDefault);
        setUserData(data);

        const repos = await getGithubUserRepos(userDefault);
        setUserRepos(repos);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
  
  const searchUser = async (e) => {
    e.preventDefault();
    if (searchName.trim() !== '') {
      try {
        const data = await getGithubUser(searchName);
        setUserData(data);

        const repos = await getGithubUserRepos(searchName);
        setUserRepos(repos);
        setSearchName('');
      } catch (error) {
        console.error("Error searching user:", error);
      }
    }
  };
 
  return (
    <div className='flex flex-col items-center justify-center bg-cyan-950'>
      <h1 className='mb-2'>Find my User</h1>
      <Search searchUser={searchUser} searchName={searchName} setSearchName={setSearchName}/>

      <div>
        {userData && (
          <Header userData={userData}/> 
        )} 

        {userRepos && (
          <Repositories userRepos={userRepos} /> 
        )}    
           
      </div>
    </div>
  );
};

export default Home;
