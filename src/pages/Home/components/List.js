
import Hotelpr from "./Hotelpr"

const List = ({ ListData }) =>{
    

return(
    <div>
    {
     ListData.map((setData) => {
    const { seq, hotel, address, note, number } = setData;
    return (
    <Hotelpr
    key={seq}
    seq={seq}
    hotel={hotel}
    address={address}
    note={note}
    number={number}
    />
    );
    })}
    
    </div>
)
}
export default List;