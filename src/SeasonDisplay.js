import './SeasonDisplay.css';
import React from 'react';
import PropTypes from 'prop-types';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr, it is cold',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = props => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`${season} season-display`}>
      <i className={`${iconName} massive icon-left icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} massive icon-right icon`} />
    </div>
  );
};

SeasonDisplay.propTypes = {
  lat: PropTypes.number,
};

export default SeasonDisplay;
