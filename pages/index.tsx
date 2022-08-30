/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */;
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Image from 'next/image';
import SEO from '../components/SEO';

interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title:string
  overview:string
  popularity:number
  poster_path:string
  release_date:string
  title:string
  video:boolean
  vote_average:number
  vote_count:number
}


const Home: NextPage = ({ results }: InferGetServerSidePropsType<GetServerSideProps>) => {
  
  return (
    <div className='container'>
      <SEO title="Home"></SEO>
      {results?.map((movie:IMovie) => (
        <div className="movie" key={movie.id}>
        <Image 
          className='img'
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          width={200}
          height={300}
        />
        <h4>{movie.original_title}</h4>
      </div>
    ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie .img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover .img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
};

export default Home;

// Only Server Side
export const getServerSideProps: GetServerSideProps =  async () => {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
}
