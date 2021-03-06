import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Library from '../../components/Library';
import DivContainer from '../../base/DivContainer';
import Title from '../../base/Title';
import { changeOrder } from '../../redux/actions/dashboard';
import { openApiKeyModal } from '../../redux/actions/apiKeyModalActions';

export default function LibraryContainer() {
  const { botList } = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const [list, setList] = useState(botList);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = result => {
    const { destination } = result;

    if (!destination) {
      return;
    }

    const items = reorder(list, result.source.index, result.destination.index);

    setList(items);
    dispatch(changeOrder(items));
  };

  const handleClick = () => {
    dispatch(openApiKeyModal());
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DivContainer
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Title type="h4">My bots:</Title>
        <Library list={list} onClick={handleClick} />
      </DivContainer>
    </DragDropContext>
  );
}
