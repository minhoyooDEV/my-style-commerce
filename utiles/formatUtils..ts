export const toCommaNum = (num: string | number) => {
	if (typeof num == 'string') {
		num = +num;
	}
	return Intl.NumberFormat().format(num);
};
