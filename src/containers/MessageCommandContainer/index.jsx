import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ConstructorBlock from '../../components/ConstructorBlock';
import Label from '../../base/Label';
import InputCover from '../../base/InputCover';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import Title from '../../base/Title';
import Divider from '../../base/Divider';
import { addItem, changeValue } from '../../redux/actions/bot';

export default function MessageCommandContainer({ id, index }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    command: '',
    response: '',
  });

  useEffect(() => {
    dispatch(
      addItem({ id, values, label: 'Command block', type: 'MESSAGE_COMMAND' }),
    );
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });

    dispatch(changeValue({ id, name, value }));
  };

  return (
    <ConstructorBlock id={id} index={index}>
      <Title type="h3">Message command</Title>
      <Divider />
      <InputGroup>
        <Label element="commandName">Command:</Label>
        <InputCover>
          <Input
            type="text"
            value={values.command}
            onChange={handleChange}
            id="commandName"
            name="command"
          />
        </InputCover>
      </InputGroup>

      <InputGroup>
        <Label element="commandResponse">Response:</Label>
        <InputCover>
          <Input
            type="text"
            value={values.response}
            onChange={handleChange}
            id="commandResponse"
            name="response"
          />
        </InputCover>
      </InputGroup>
    </ConstructorBlock>
  );
}
