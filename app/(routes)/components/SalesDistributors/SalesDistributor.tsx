import CustomIcon from '@/components/CustomIcon/CustomIcon';
import { BarChart } from 'lucide-react';
import GraphicSuscribers from '../GraphicSuscribers/GraphicSuscribers';

const SalesDistributor = () => {
  return (
    <div>
      <div className='shadow-sm bg-background rounded-lg p-5'>
        <div className='flex gap-x-2 items-center'>
          <CustomIcon icon={BarChart} />
          <p className='text-xl'>Sales Distribution</p>
        </div>
        <GraphicSuscribers />
      </div>
    </div>
  );
};

export default SalesDistributor;
