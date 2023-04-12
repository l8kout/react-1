import '../../App.css';

const Simpson = ({item}) => {
    return (
        <div>
            <div>
                <div>name - {item.name}</div>
                <div>surname - {item.surname}</div>
                <div>age - {item.age}</div>
                <div>info - {item.info}</div>

                <div> <img alt="img" className={"pht"} src={item.photo} /> </div>
            </div>
        </div>
    )

 };

export default Simpson;