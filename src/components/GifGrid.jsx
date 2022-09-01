import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'


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

      <ul>
        {img.map(({id, title, url}) => (
          <li key={id}>
            {title.toLowerCase()}
            <img src={url} alt={title} />
          </li>
        ))}
      </ul>

    </>
  );
}; 
