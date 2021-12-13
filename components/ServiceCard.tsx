import { FunctionComponent } from 'react';
import { IService } from '../type';

const ServiceCard: FunctionComponent<{ service: IService }> = ({ service: { about, title, Icon } }) => {

  const createMarkup = () => {
    return {
      __html: about
    }
  }

  return (
    <div className='p-2 flex items-center space-x-4'>
      <Icon className='w-12 h-12 text-green' />
      <div>
        <h5 className='font-bold'>{title}</h5>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
