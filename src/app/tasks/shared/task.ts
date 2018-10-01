import { Category } from '../../categories/shared/category';
import { PriorityTypes } from '../../priorityTypes';

export class Task {
  taskId: number;
  name: string;
  category: Category;
  importance: PriorityTypes;
  deadline: Date;
  completed: boolean;
}
