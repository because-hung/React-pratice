const Baby = (props) => {




    return (
        <>
        <h1 className='babyData'>baby123</h1>
        <h2> {props.name} </h2>
        <button onClick={props.hello}>baby enter</button>
        <br/>
        <br/>
        <a href="#">{props.children}</a>
      </>          
    )
}

export default Baby;