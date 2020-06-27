import React from 'react';
import {
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Dialog,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadForm } from '~/store';
import { getForm, deleteForm } from '~/utils';

type Props = {
  forms: ''[] | undefined;
  isOpen: boolean;
  handleOpen: (arg1: boolean) => void;
  handleDelete: () => void;
};

export const FormList = ({
  forms,
  isOpen,
  handleOpen,
  handleDelete,
}: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    handleOpen(false);
  };

  const handleListItemClick = (value: string) => {
    const newForm = getForm(value);
    dispatch(loadForm(newForm));
    handleOpen(false);
    enqueueSnackbar('Loaded 🧐');
    history.push(`/?id=${value}`);
  };

  const onDelete = (value: string) => {
    deleteForm(value);
    handleDelete();
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>Select saved form</DialogTitle>
      <List>
        {forms &&
          forms.length > 0 &&
          forms.map((form) => (
            <ListItem
              button
              onClick={() => handleListItemClick(form)}
              key={form}
            >
              <ListItemText primary={form} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDelete(form)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
    </Dialog>
  );
};
