import React from 'react';
import Box from './Box';

const boxes = [
  { vid: 's6zR2T9vn2c', img: '/images/pic01.jpg' },
  { vid: 'CvWKnt06BPA', img: '/images/pic02.jpg' },
  { vid: '5D0NP6fU2oc', img: '/images/pic03.jpg' },
  { vid: 'YzgTMh21zhI', img: '/images/pic04.jpg' },
  { vid: 'Jx4okVd3K14', img: '/images/pic05.jpg' },
  { vid: 'EMxiuq_tMq0', img: '/images/pic06.jpg' },
];

export default function Videos() {
  return (
    <div className="videos-root">
      <div className="row">
        {
        boxes.map(box => (
          <Box
            vid={box.vid}
            img={box.img}
            key={box.img}
          />
        ))
      }
      </div>
    </div>
  );
}
