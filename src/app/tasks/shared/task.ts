import { Category } from '../../categories/shared/category';

export class Task {
  taskId: number;
  name: string;
  category: Category;
  importance: String;
  deadline: Date;
  completed: boolean;
}
