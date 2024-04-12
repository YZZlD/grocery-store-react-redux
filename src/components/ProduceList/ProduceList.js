import ProduceDetails from './ProduceDetails';
import './ProduceList.css';
import { getAllProduce } from '../../store/produce';
import {useSelector} from 'react-redux';

function ProduceList() {
  const produceArr = useSelector(getAllProduce)

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;
