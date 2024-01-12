import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Model/user.entity';
import { Repository } from 'typeorm';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { database } from 'firebase-init';

@Injectable()
export class LoginService {
  private db: FirebaseFirestore.Firestore;
  constructor(private jwtService: JwtService) {
    this.db = database();
  }

  async authLogin(
    res: Response,
    authLogin: { email: string; password: string },
  ): Promise<any> {
    try {
      const users = this.db.collection('users');
      const findUser = await users
        .where('email', '==', authLogin.email)
        .limit(1)
        .get();
      //   if (findUser.empty) {
      //     return res.status(404).json({ message: 'User Not Found' });
      //   }

      const user = findUser.docs[0].data();
      const match = await bcrypt.compare(authLogin.password, user.password);
      if (!match) {
        return res.status(400).json({ message: 'Password Incorrect!' });
      }

      if (user.verification_status !== 'Verified') {
        return res.status(401).json({ message: "You're Not Verified!" });
      }

      const payload: {
        id: number;
        fullName: string;
        email: string;
        gender: string;
        password: string;
        verification_status: string;
        phone_number: string;
        otp_code: number;
        urlImage: string;
      } = {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        gender: user.gender,
        phone_number: user.phone_number,
        password: user.password,
        otp_code: user.otp_code,
        verification_status: user.verification_status,
        urlImage: user.urlImage,
      };
      const access_token = await this.jwtService.signAsync(payload);
      users.doc(authLogin.email).update({
        access_token,
      });
      return res
        .status(200)
        .json({ message: 'You have successfully logged in!', access_token });
    } catch (error) {
      if (error) {
        // console.log(error)
        return res
          .status(404)
          .json({ message: "Email isn't Registered to any Account " });
      }
    }
  }
}
