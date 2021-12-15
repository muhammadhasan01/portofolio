import { FunctionComponent } from 'react';
import { IExperience } from '../type';

const ExperienceCard: FunctionComponent<{ education: IExperience }> =
  ({
     education: {
       company, role, description, duration,
       CompanyIcon, companyIconSize,
     },
   }) => {
    return (
      <div>
        <div className=' my-1 flex justify-left items-center'>
          <CompanyIcon className='mr-2' size={companyIconSize} />
          <span className='font-bold text-base lg:text-lg'>{company}</span>
          <span className='hidden font-semibold lg:block lg:text-sm md:ml-2'>{duration}</span>
        </div>
        <div className='md:text-lg flex justify-left items-center'>
          <span className='font-semibold text-sm md:text-base'>{role}</span>
        </div>
        <p className='my-2 text-sm text-gray-800 dark:text-white lg:text-base'>
          {description}
        </p>
      </div>
    );
  };

export default ExperienceCard;
