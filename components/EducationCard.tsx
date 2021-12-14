import { FunctionComponent } from 'react';
import { IEducation } from '../type';
import { MdDateRange } from 'react-icons/md';

const EducationCard: FunctionComponent<{ education: IEducation }> =
  ({
     education: {
       school, major, description, duration,
       SchoolIcon, schoolIconSize, MajorIcon, majorIconSize,
     },
   }) => {
    return (
      <div>
        <div className=' my-1 flex justify-left items-center'>
          <SchoolIcon className='mr-1' size={schoolIconSize} />
          <span className='font-bold text-base lg:text-lg'>{school}</span>
          <span className='hidden lg:block lg:text-sm md:ml-2'>{duration}</span>
        </div>
        <div className='md:text-lg flex justify-left items-center'>
          <MajorIcon className='mr-1' size={majorIconSize} />
          <span className='font-semibold text-sm'>{major}</span>
        </div>
        <p className='my-2 text-sm lg:text-base font-medium'>
          {description}
        </p>
      </div>
    );
  };

export default EducationCard;
