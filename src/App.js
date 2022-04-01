import React, { useState,useEffect,useLayoutEffect } from 'react';


import TlolCard from './components/TlolCard'
function App() {
  const [nickname, setNickname] = useState("")
  const [blackListDto, setBlackListDto] = useState({
    totalBlackCount:0,
    black:false
  })
  const [hashtags,setHashtags] = useState([])

  const receiveMassege = (event) =>{
    console.log("?")
    if(event.origin !== "https://www.op.gg"){
      return;
    }
    console.log("?????????")
    const resNickname = event.data.nickname
    setNickname(resNickname)
  }
  useLayoutEffect(() => {
    if(""!==nickname){
      const getTlolDto = async ()=>{
        const res = await fetch(`https://tlol.me/api/search/one/${nickname}`)
        const json = await res.json()
        console.log(json)
        console.log("나와라", nickname)
        setBlackListDto(json.blackListDto)
      }
      getTlolDto()
    }
  }, [nickname])
  useLayoutEffect(() => {

    const getHashtags = async ()=>{
      const res = await fetch(`https://tlol.me/api/blacklist/detail/hashtags/${nickname}`)
      const json = await res.json()
      setHashtags(json.hashtags)
    }
    getHashtags()
  }, [blackListDto])
  window.addEventListener("message", receiveMassege, false)

  return (
    <div className="App">
      <TlolCard tlolInfo={blackListDto} hashtags={hashtags}/>
    </div>
  );
}

export default App;
