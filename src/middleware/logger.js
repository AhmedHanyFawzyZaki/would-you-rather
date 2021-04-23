const logger = (store) => (next) => (action) => {
	console.log("1111111111111111111111111");
	console.group(action.type);
	console.log('The action: ', action);
	const returnValue = next(action);
	console.log('The new state: ', store.getState());
	console.groupEnd();
	return returnValue;
};

export default logger;