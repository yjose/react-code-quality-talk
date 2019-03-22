import React, {Component} from 'react';
import * as Sentry from '@sentry/browser';

import initSentry from './initSentry';

initSentry();

export default class ErrorButton extends Component {
  handleClick = () => {
    throw new Error('Sentry Error Test');
  };

  componentDidCatch(error) {
    Sentry.captureException(error);
  }

  render() {
    return (
      <div>
        <button
          style={{fontSize: 40, padding: '10px 30px'}}
          onClick={this.handleClick}
          type="submit">
          Trigger a new Error
        </button>
      </div>
    );
  }
}
