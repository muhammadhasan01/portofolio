import { services } from '../data';
import ServiceCard from '../components/ServiceCard';

const index = () => {
  return (
    <div className='flex flex-col px-6 pt-1 flex-grow'>
      <h5 className='my-3 font-medium'>
        I am Hasan, a Final Year Informatics Student at Institut Teknologi Bandung. I like doing programming and
        learning Software Engineering.
      </h5>
      <div className='p-4 mt-5 bg-gray-400 flex-grow'
           style={{ 'marginLeft': '-1.5rem', 'marginRight': '-1.5rem' }}>
        <h6 className='my-3 font-bold text-xl tracking-wider'>
          What I Offer
        </h6>
        <div className='grid lg:grid-cols-2 gap-6'>
          {
            services.map(service => (
              <div className='lg:col-span-1 bg-gray-200 rounded-lg'>
                <ServiceCard service={service} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default index;
