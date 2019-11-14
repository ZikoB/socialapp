import { useEffect, useState } from 'react';
import axios from 'axios';

export const usePostApi = (url, userData) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async props => {
			setIsError(false);
			setIsLoading(true);
			const res = await axios.post(url, userData);
			const data = res.data;
			console.log(data);
			props.history.push('/');
			try {
				const res = await axios;
			} catch (err) {
				setIsError(err.response.data);
			}
			fetchData();
		};
	});
	return [{ isLoading, isError }];
};
