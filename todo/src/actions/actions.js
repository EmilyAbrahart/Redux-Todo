import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const MARK_COMPLETE = 'MARK_COMPLETE';
export const CLEAR_COMPLETE = 'CLEAR_COMPLETE';

export const addToDo = text => {
	return {
		type: ADD_TODO,
		payload: {
			value: text,
			completed: false,
			id: uuid()
		}
	};
};

export const markComplete = id => {
	return { type: MARK_COMPLETE, payload: id };
};

export const clearComplete = () => {
	return { type: CLEAR_COMPLETE };
};
