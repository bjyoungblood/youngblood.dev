import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    minHeight: 300,
    height: '50vh',
  },
  headline: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contact: {
    display: 'flex',
    flexFlow: 'row wrap',
    marginTop: theme.spacing(2),
    justifyContent: 'space-evenly',
    alignItems: 'center',

    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export interface HeroProps {
  title: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.headline}>
        <Typography variant="h1" align="center">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h4" align="center">
            {subtitle}
          </Typography>
        )}
      </div>
      <div className={classes.contact}>{children}</div>
    </div>
  );
};
