import { NextApiRequest, NextApiResponse } from 'next';
import { services } from '../../utils/data';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // By default it will be a GET request
  res.status(200).json({ services });
}
