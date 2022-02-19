import { FunctionComponent } from 'react';
import { IService } from '../utils/type';

const ServiceCard: FunctionComponent<{ service: IService }> = ({ service: { about, title, Icon } }) => {

  const createMarkup = () => {
    return {
      __html: about
    }
  }

  return (
    <div className='p-3 grid grid-cols-12 flex items-center space-x-4'>
      <Icon className='w-full col-span-2 text-cnc-yellow' size={50} />
      <div className='col-span-10 pb-2'>
        <div className='font-bold font-montserrat text-yellow-400'>{title}</div>
        <p dangerouslySetInnerHTML={createMarkup()} className='lg:text-medium' />
      </div>
    </div>
  );
};

export default ServiceCard;
