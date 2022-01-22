import React from 'react';
import "./Map.css"
const Map = (props) => {
  return <div className='map-comp'>
      <iframe src={props.source} height={props.height} width={props.width} 
      loading={props.loading} allowFullScreen={props.allowFullScreen} />
  </div>;
};

export default Map;
