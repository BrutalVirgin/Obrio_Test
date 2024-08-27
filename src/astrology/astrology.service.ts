import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AstrologyService {
  async sendReport(data: string) {
    await axios.post('https://fake.com', data);
  }
}
