import { FunctionComponent } from 'react';
import { IAchievement } from '../utils/type';

const AchievementCard: FunctionComponent<{ achievement: IAchievement }> = (
  {
    achievement: {title, issuedBy, description, Icon}
  }
) => {
  const createMarkup = () => {
    return {
      __html: title
    }
  }
  return (
    <div>
      <div className='my-1 grid grid-cols-12 flex flex-col items-center justify-left'>
        <Icon className='col-span-2' size={25}/>
        <span dangerouslySetInnerHTML={createMarkup()} className='font-bold text-medium -ml-2 lg:-ml-7 col-span-10' />
      </div>
      <div className='md:text-lg flex justify-left items-center'>
        <span className='font-semibold text-base md:text-medium'>Issued By {issuedBy}</span>
      </div>
      <p className='my-2 font-medium text-base text-gray-800 dark:text-white lg:text-medium'>
        {description}
      </p>
    </div>
  );
};

export default AchievementCard;
