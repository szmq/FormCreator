import React from 'react';
import { useSelector } from 'react-redux';
import { getFormFields } from '~/store';
import {
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
  }),
);

export const Previewer = () => {
  const classes = useStyles();
  const formFields = useSelector(getFormFields);

  const [fieldType, setFieldType] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const type = event.target.value as string;

    setFieldType(type);
  };

  return (
    <Grid container spacing={1}>
      {formFields &&
        formFields.map((formField) => {
          return (
            <Grid item xs={12}>
              {!formField.type && (
                <Paper
                  variant="elevation"
                  style={{
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography>Select field type to display</Typography>
                </Paper>
              )}

              {formField.type === 'Select' && (
                <div style={{ height: '56px' }}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      {formField.label}
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={fieldType}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'m'}>Mezczyzna</MenuItem>
                      <MenuItem value={'k'}>Kobieta</MenuItem>
                      <MenuItem value={'i'}>Inna</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
            </Grid>
          );
        })}
    </Grid>
  );
};
