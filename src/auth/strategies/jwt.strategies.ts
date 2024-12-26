import { Injectable } from '@nestjs/common';
import sha256 from 'sha256';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Injectable()
export class jwtService {
  async hashPassword(password: string) {
    const hash = bcrypt.hash(password, 10);

    return hash;
  }

  async generateToken(password: string) {
    const payload = { passwordhash: bcrypt.hash(password, 10) };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    return token;
  }

  async validateToken(token: string) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return { valid: true, data: decoded };
    } catch (err: any) {
      return { valid: false, reason: err.message };
    }
  }
}
