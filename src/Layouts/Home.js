import React from 'react'
import Searchbar from "../components/Searchbar/Searchbar"
import Homequizcardcomp from '../components/Homequizcardcomp/Homequizcardcomp'
import Filter from '../components/Filter/Filter'
import Datas from '../Data/data'
import { useEffect, useState } from 'react'

function Home() {
  useEffect(()=>{
    const darray = JSON.parse(localStorage.getItem('dQa'));
    if(!darray || !Array.isArray(darray)){
      let localarr = []
      localStorage.setItem('dQa', JSON.stringify(localarr));
    }
  })
   //  all the usestate here 

  const [filtring , setFiltring] = useState({
    Coption : 'All',
    Soption: "All",
    Searchfilter: ""
  })

  const [displayc , setDisplayc] = useState({Datas:Datas,soption:[]});


    /// function for removing duplicate elements from an array 

    function removeduplicate(arr){
      return [...new Set(arr)];
    };

  /// Maping all the data for displaying class catagory filter options

  let  classoption = mapingarr(Datas, "Standard")

  /// maping only those array which are filterd by Class function for displaying the subject catagory filter options

 


  /// function for filter quizcard by Class 

  function findbyClass(c){
    if(c!== 'All'){
      return Datas.filter((data)=> data.Standard === c);
    }
    return Datas;
  };

  /// function for filter quizcard by subject

  function findbySubject(s){
    if(s!=="All"){
      if(filtring.Coption !== "All"){
        let fbs = findbyClass(filtring.Coption);
        return fbs.filter((f)=> f.Subject === s);
      }
      return Datas.filter((data)=>data.Subject === s);
    }
    return findbyClass(filtring.Coption);
  }


  /// function for search by searchbar string 

  function findbysearch(Ss){
    return Datas.filter((data)=> {
      const regex = new RegExp(Ss, 'gi');
      return data.Searchtags.match(regex)
    });
  }

  ///  function for maping array by the propertys 

  function mapingarr(arr, mapby){
    if(mapby === "Standard"){
      let standardlist = removeduplicate(arr.map((ar)=> ar.Standard))
      return standardlist
    }
    let subjectlist = removeduplicate(arr.map((ar)=> ar.Subject))
    return subjectlist
  }


  /// useEffect Watching for filtring changeing 

  useEffect(()=>{
    if(filtring.Searchfilter == ""){
      let arrybyCoption = findbyClass(filtring.Coption);
      let arrybySoption = findbySubject(filtring.Soption);
      let soption = mapingarr(arrybyCoption, "Subject");
      if(arrybyCoption == arrybySoption){
        setDisplayc({Datas:arrybyCoption,soption:soption})
      }else{
        setDisplayc({Datas:arrybySoption,soption:soption})
      }
    }else{
      let arrybysearchfilter = findbysearch(filtring.Searchfilter)
      console.log(arrybysearchfilter);
      setDisplayc(prevsetDisplayc => {
        return {...prevsetDisplayc, Datas: arrybysearchfilter}
      })
    }

  },[filtring])






  function filterQuizcard(value, name) {
    if (name == "class") {
      setFiltring(prveFiltring => {
        return {...prveFiltring, Coption: value}
      })
    }else if (name == "subject"){
      setFiltring(prveFiltring => {
        return {...prveFiltring, Soption: value}
      })
    }else{
      setFiltring(prveFiltring => {
        return {...prveFiltring,Searchfilter: value}
      })
    }
  }

  function dornot(Qid){
    return false
  }



  return (
    <>
    <Searchbar onselectfilter = {filterQuizcard}/>
    <Filter onselectfilter = {filterQuizcard} subjectoptions = {displayc.soption}  classoption = {classoption} />
    <Homequizcardcomp  data = {displayc.Datas} />
    </>
  )
}

export default Home