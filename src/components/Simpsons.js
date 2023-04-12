import Simpson from "./simpson/Simpson";

function Simpsons({xxx: simpsons}) {

    return (
        <div>
            {
                simpsons.map((value, index) => (<Simpson item={value} key={index}/>))
            }
        </div>
    );
}

export default Simpsons;