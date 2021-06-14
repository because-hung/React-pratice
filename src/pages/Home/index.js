import { useState, useEffect } from "react";
import List from "./components/List"
import './index.css';
import styled from 'styled-components';
// import Baby from './components/Baby'
// import Com from './components/Com'

const Home = () =>{

   async function fetchData(setData) {
       const res = await fetch('https://api.kcg.gov.tw/api/service/Get/cb50902c-3681-43ec-89da-705f68eafb88')
       const { data } = await res.json()
       setData(data)
       setFilter(data)
   }

   const [filtered, setFilter] = useState([])   
   const [data, setData] = useState([])
  
    
   useEffect(() => {
    fetchData(setData)
  }, [])



  function search(e){

    console.log(data)
   
    const newTxt = e.target.value
    console.log(newTxt)
    if(!newTxt){
        setFilter(data)
    }
    const searchData = data.filter(item => {
      const Newitem = item.地址
      return Newitem.includes(newTxt)
    })
    console.log(searchData)
   setFilter(searchData)

  }


//     const sayHi = () => {
//         document.querySelector('.h2Color').innerHTML="hello"
//     }
 

//     // function getJson() {
//     //     fetch('http://localhost:3000/datas/1')
//     //     .then(res => res.text())
//     //     .then(data => {
//     //         console.log(data);
//     //     })

//     // }

//   //style components
//     const Title = styled.p`
//     color:green;
//     `;

//     const conStyle = {
//         width:'200px',
//         height:'200px',
     
//     };

    return (
       
        <div>
            <div >
                <div className="outer">
                    <input type="search" className="input" onChange={search}/>
        
                </div>
            <ul className="list">
                {
                    filtered.map((data)=>{
                        return(
                            <div key={data.seq}>
                        <li >{data.seq}</li>
                        <li >{data.地址}</li>
                        <li >{data.觀光旅館名稱}</li>
                        </div>
                        )
                    })
                }
               
            </ul>
            
            </div>
            
        </div>
//         <div style={conStyle}>
// <h1 className="ReactDiv" >test</h1> 
// <h2 className="h2Color" >123</h2>
// <Title>this is styled comtitleonent</Title>
// <Baby>childrenTestText</Baby>
// <Baby name="Tommy" hello={sayHi}/>
// <Com name="penny" handleClci/>

//         </div>


        
    )
}

export default Home;