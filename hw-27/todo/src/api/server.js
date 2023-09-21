import { Api } from './Api';
import { todosUrl } from './url';
import { waitersUrl } from './url';

export const TodoApi = new Api(todosUrl);
export const WaitersApi = new Api(waitersUrl);