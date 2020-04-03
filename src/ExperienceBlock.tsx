import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

interface ExperienceBlockProps {
  organization: string;
  position: string;
  startDate: string;
  endDate?: string;
  highlights?: (string | React.ReactNode)[];
}

const useStyles = makeStyles((theme) => ({
  headline: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
  organization,
  position,
  startDate,
  endDate,
  highlights,
}) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.headline}>
        <div>
          <Typography variant="h6" color="primary" display="inline">
            {organization}
          </Typography>
          <Typography variant="h6" display="inline">
            {' / '}
            {position}
          </Typography>
        </div>
        <Typography variant="subtitle1" color="textSecondary">
          {startDate}
          {endDate ? ' - ' : null}
          {endDate}
        </Typography>
      </div>
      <ul>
        {highlights?.map((h, i) => (
          <li key={i}>
            <Typography>{h}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
