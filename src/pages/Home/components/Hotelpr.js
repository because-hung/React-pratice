const Hotelpr = ({ seq, hotel, address, note, number }) =>{
    return(
        <div>
            <p>{seq}</p>
            <p>{hotel}</p>
            <p>{address}</p>
            <p>{note}</p>
            <p>{number}</p>
            </div>
    )
}

export default Hotelpr;