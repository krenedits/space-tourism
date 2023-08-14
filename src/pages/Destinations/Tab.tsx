import data from '@/data.json';
import { TabProps } from './types';

const Tab = ({ index, setIndex, ownIndex }: TabProps) => {
    const isActive = index === ownIndex;
    return (
        <li
            onClick={() => setIndex(ownIndex)}
            style={
                isActive
                    ? {
                          borderBottom: '3px solid #ffffffff',
                          color: '#fff',
                      }
                    : {}
            }
        >
            {data.destinations[ownIndex].name}
        </li>
    );
};

export default Tab;
