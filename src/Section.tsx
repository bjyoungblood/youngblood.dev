import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">{title}</Typography>
      {children}
    </div>
  );
};
