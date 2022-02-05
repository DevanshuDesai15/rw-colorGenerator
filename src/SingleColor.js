import React, {useState} from 'react';

const SingleColor = ({index, rgb, weight}) => {

    const [alert, setalert] = useState(false);
    const bcg = rgb.join(',')

  return (
      <article className={'color'} style={{backgroundColor:`rgb(${bcg})`}}>
          <p className='percent-value'>{weight}%</p>
          <p className='color-value'>{bcg}</p>
      </article>
  )
};

export default SingleColor;
