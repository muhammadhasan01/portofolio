import { FunctionComponent } from 'react';
import { IEducation } from '../utils/type';
import Image from 'next/image';

const EducationCard: FunctionComponent<{ education: IEducation }> =
  ({
     education: {
       school, role, description, duration, logoPath,
       logoWidth, logoHeight,
     },
   }) => {
    return (
      <div>
        <div>
          <div className='my-1 flex justify-left items-center'>
            <Image src={logoPath} width={logoWidth || 30} height={logoHeight || 30} quality='100' />
            <div className='flex flex-col'>
              <div className='ml-2'>
                <span className='font-bold font-montserrat'>{school}</span>
                <span className='ml-1 hidden text-xs xl:inline'>
                  {duration}
                </span>
              </div>
              <div className='md:text-lg ml-2 flex justify-left items-center'>
                <span className='font-semibold text-sm font-montserrat'>{role}</span>
              </div>
            </div>
          </div>
          <p className='my-2 font-medium text-base text-gray-800 dark:text-white xl:text-medium'>
            {description}
          </p>
        </div>
      </div>
    );
  };

export default EducationCard;
