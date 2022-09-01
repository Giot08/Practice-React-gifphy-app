import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {

  getGifs();

  return (
    <>
      <h2>{category}</h2>
    </>
  );
};
