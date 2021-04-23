import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  constructor(){
    super();

    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  /* getDescription (argTime){
    if (argTime > 23 * 60 * 60) {
      return 'It is Happy Hour';
    } else {
      return argTime;
    }
  } */

  render () {
    const {title} = this.props;
    const {time} = this.getCountdownTime();
    return (
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className='promoDescription'>{time}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  getDescription: PropTypes.func,
};

export default HappyHourAd;
