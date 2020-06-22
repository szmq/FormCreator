import React from 'react';
import { IFormField, MessageType } from '~/types';
import { SelectField } from './SelectField';

const { CHECKBOX, RADIO, SELECT } = MessageType;

type Props = IFormField;

export const ExternalFields = ({ id, values, type }: Props) => (
  <>
    {(type === SELECT || type === CHECKBOX || type === RADIO) && (
      <SelectField formCaseID={id} formCaseValues={values} />
    )}
  </>
);
