import {
  CanActivate,
  ExecutionContext,
  Inject,
  OnModuleInit,
} from '@nestjs/common';
import { AUTH_PACKAGE } from './constants';
import { ClientGrpc } from '@nestjs/microservices';
import { AuthService } from './authService.interface';
import { Request } from 'express';

export class AuthGuard implements CanActivate, OnModuleInit {
  @Inject(AUTH_PACKAGE) private client: ClientGrpc;

  private usersService: AuthService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const jwt = request.headers.authorization;
    if (!jwt) {
      return false;
    }
    const rpcRes = await this.usersService.HasAccess({
      jwt,
      path: request.url,
      method: request.method,
    });
    return rpcRes.hasAccess;
  }

  onModuleInit() {
    this.usersService = this.client.getService<AuthService>('AuthService');
  }
}
