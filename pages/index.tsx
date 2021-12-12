import { GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext } from 'next';

const index = ({ services }) => {
  return (
    <h1 className='text-3xl font-bold underline'>
      Hello world!
    </h1>
  );
};

export default index;

export const getStaticProps = async (context: GetStaticPropsContext) => {

  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();

  return {
    props: {
      services: data.services,
    },
  };
};
