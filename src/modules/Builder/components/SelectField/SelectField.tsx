import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { InputText } from '~/modules/Builder/components/SelectField/InputText';
import { useDispatch } from 'react-redux';
import { addSelectValue } from '~/store';

type Props = {
  formCaseID: number;
  formCaseValues: any;
};

export const SelectField = ({ formCaseID, formCaseValues }: Props) => {
  const dispatch = useDispatch();

  const addValue = () => {
    dispatch(addSelectValue(formCaseID));
  };

  return (
    <Grid>
      {formCaseValues?.map((formValue: any, index: number) => (
        <InputText
          key={index}
          formFieldId={formCaseID}
          fieldValueId={index}
          fieldValue={formValue}
        />
      ))}

      <Button onClick={addValue}>Add</Button>
    </Grid>
  );
};
