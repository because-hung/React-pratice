// import React, { Component } from 'react';

// class FormCom extends Component{
//   constructor(){
//     super()
//     this.nameRef  = React.createRef()
//   }
//   login = () =>{
//     console.log('value',this.nameRef.current.value)
//   }
//     render(){
//     return(
//      <>
//      <h1>ref test</h1>
//      <input type="text" ref={this.nameRef} />
//      <button onClick={this.login}>登入</button>
//      </>
//     );
// }
// }
// export default FormCom

// import {useState} from 'react';

// const Form = () => {

//   const [form, setForm] = useState("");
//   function FormChange(e){
//     setForm(e.target.value);
   
//   }
//   function login(e){
//     console.log('form value',e.target.value)
//   }
//   return(
//     <>
//        <h1>form hook test</h1>
//      <input type="text" value={form} onChange={FormChange}/>
        
//       <button value={form} onClick={login}>登入</button>
//     </>
//   )

// }
//  export default Form


import React, { Component } from 'react';

class Compom extends Component{
  constructor(){
    super()
    this.state={
      txt:'white'
    }
  }
  Change = () =>{
    this.setState({txt:'black'})
  }
    render(){
    return(
     <>
     <h1>{this.state.txt}</h1>
     <button onClick={this.Change}>見證奇蹟的時候</button>
     </>
    );
}
}
export default Compom

