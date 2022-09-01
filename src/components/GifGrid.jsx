import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

  const [img, setImg] = useState([]);
  const getImgs = async () => {
    const newImages = await getGifs(category);
    setImg(newImages);
  }

  useEffect(() => {
    getImgs();
  }, [])

  return (
    <>
      <h2>{category}</h2>

      <div className='card-grid'>
        {img.map((img) => (
          <GifItem
            key={img.id}
            {...img}
          // title={img.title}
          // url={img.url}
          />
        ))}
      </div>

    </>
  );
}; 
