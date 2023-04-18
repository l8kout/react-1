const Flight = ({flight}) => {
    return (
        <div>
            <div>mission_name {flight.mission_name}</div>
            <div>launch_year {flight.launch_year}</div>

            <img src={flight.links.mission_patch_small} alt={flight.mission_name}/>
            
        </div>
    );
};

export {Flight};