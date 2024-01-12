import { Body, Controller, Post, Res } from '@nestjs/common';
import { OtpService } from './otp.service';
import { Response } from 'express';

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post()
  authLogin(
    @Res() res: Response,
    @Body() getOTP: { email: string; otp_code: number },
  ) {
    return this.otpService.getOTP(res, getOTP);
  }
}
