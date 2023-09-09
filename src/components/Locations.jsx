import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card from './Card';


const Locations = () => {

  const [data, setData ]=  useState([])
    useEffect(() => {
        axios
          .get("./data.json") // Make sure the path is correct
          .then((res) => 
            setData(res.data)// Log the data from the response
          );
          
      }, []);
      

    return (
        <div>
            <h2>Locations</h2>
            <ul>
              {data.map((location, id, ) => (
                <Card  key={location.id} title={location.title} description={location.description} cover={location.cover} />
              ) ) }
            </ul>
            {/* // <li>
            //   <div className="card">
            //   <img className="card-picture" />{location.cover} 

            //   <div className="card-descript">
            //     <h3 className="card-descript__title">{location.title}</h3>
            //     <div className="card-descript__description">{location.description} </div>
            //     <span className="card-descript__picture">{location.picture} </span>
            //   </div>
            //   </div> </li>) */}
             
        </div>
    );
};

export default Locations;