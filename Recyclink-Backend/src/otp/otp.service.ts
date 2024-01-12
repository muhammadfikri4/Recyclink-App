import { MailerService } from '@nestjs-modules/mailer';
import { Body, Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import { database } from 'firebase-init';

@Injectable()
export class OtpService {
  private db: FirebaseFirestore.Firestore;
  constructor(private mailerService: MailerService) {
    this.db = database();
  }

  async getOTP(res: Response, getOTP: { email: string; otp_code: number }) {}
}
