import { IUser } from 'app/repository-list/user.model';

export interface IRepository {
  name: string;
  owner: IUser;
  description: string;
  tags: string[];
  stars: number;
}
