import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  // eslint-disable-next-line prettier/prettier
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(404).json({ error: "User don't exists!" });
    }
  }
}

export { ShowUserProfileController };
