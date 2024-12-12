import { Injectable, OnModuleInit } from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit() {
    this.connection.once('open', () => {
      console.log('Database connected successfully');
    });

    this.connection.on('error', (err) => {
      console.error('Database connection error:', err);
    });
  }
}
