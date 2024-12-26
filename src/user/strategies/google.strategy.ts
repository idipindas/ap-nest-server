import { Injectable } from '@nestjs/common';
import querystring from 'querystring';
import axios from 'axios';
import jwt from 'jsonwebtoken';

@Injectable()
export class googleStrategyService {
  async googleAuthCalling() {
    const params = querystring.stringify({
      client_id: process.env.GOOGLE_CLIENT_ID,
      redirect_uri: process.env.GOOGLE_REDIRECT_URL,
      response_type: 'code',
      scope:
        'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email ',
      access_type: 'offline',
      prompt: 'consent',
    });
    return `https://accounts.google.com/o/oauth2/auth?${params}`;
  }

  async googleCallbacks(code: any) {
    try {
      const tokenResponse = await axios.post(
        `https://oauth2.googleapis.com/token`,
        querystring.stringify({
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_SECRET,
          code: code,
          redirect_uri: process.env.GOOGLE_REDITRECT_URL,
          grant_type: 'authorization_code',
        }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      );
      console.log('==============================', tokenResponse);
      const { access_token, refresh_token } = tokenResponse.data;
      const decodeToken = jwt.decode(tokenResponse?.data?.id_token, {
        complete: true,
      });

      return {
        data: decodeToken?.payload,
        access_token: access_token,
        refresh_token: refresh_token,
      };
    } catch (error: any) {
      console.error(
        'Error during Google OAuth process:',
        error.response?.data || error,
      );
      throw new Error('Authentication Failed');
    }
  }
}
