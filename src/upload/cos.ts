const ibm = require('ibm-cos-sdk');

import { Logger } from 'tslog';

class IbmCosHandler {
  private logger: Logger<any>;

  constructor() {
    this.logger = new Logger({ name: 'IbmCosHandler' });
  }
}

console.log('hello from cos');
