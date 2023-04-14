import '../../App.css';

const Simpson = ({simpson}) => {

    return (
        <div>
            <div>
                <div>name - {simpson.name}</div>
                <div>surname - {simpson.surname}</div>
                <div>age - {simpson.age}</div>
                <div>info - {simpson.info}</div>

                <div>
                    <img alt={simpson.name} className={"pht"} src={simpson.photo} />
                </div>
            </div>
        </div>
    )

 };

export default Simpson;