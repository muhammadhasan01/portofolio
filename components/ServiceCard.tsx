import { FunctionComponent } from 'react';
import { IService } from '../type';

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
        <h5 className='font-bold text-yellow-400'>{title}</h5>
        <p className='text-orange-100' dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
