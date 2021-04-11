import { useState } from 'react';
import styles from './AuthorizationForm.module.scss';
import Form from '../../base/Form';
import Label from '../../base/Label';
import Input from '../../base/Input';
import InputGroup from '../../base/InputGroup';
import Button from '../../base/Button';
import FormHeader from '../FormHeader';

export default function AuthorizationForm({}) {
  const [forms, setForms] = useState({
    selected: { id: 0, name: 'Sign In' },
    list: [
      { id: 0, name: 'Sign In' },
      { id: 1, name: 'Sign Up' },
    ],
  });

  return (
    <div className={styles['authorization-form']}>
      <FormHeader
        options={forms.list}
        activeId={forms.selected.id}
        onClick={id => {
          const selected = forms.list.filter(item => item.id === id);
          setForms({ ...forms, selected: selected[0] });
        }}
      />
      <Form>
        <InputGroup>
          <Label>User name:</Label>
          <div className={styles['authorization-form-input']}>
            <Input value="" onChange={() => {}} />
          </div>
        </InputGroup>

        <Button onClick={() => {}}>Sign Up</Button>
      </Form>
    </div>
  );
}
