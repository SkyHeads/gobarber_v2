import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateAvatarUserService from '@modules/users/services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatarService = container.resolve(UpdateAvatarUserService);

    const user = await updateAvatarService.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  }
}
