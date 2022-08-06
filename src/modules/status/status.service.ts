import { Injectable } from '@nestjs/common';

import * as data from '../../data/data.json';
const status = data.status;

@Injectable()
export class StatusService {
  getAll() {
    return status;
  }
}
