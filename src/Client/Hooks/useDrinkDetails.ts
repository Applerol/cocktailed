import { useState, useEffect } from 'react';
import { DrinkDetails } from '../../Shared/Models/DrinkDetails';

export default (drinkId: number) => {
	const [drinkDetails, setDrinkDetails] = useState<DrinkDetails | null>(null);
	const [isComplete, setIsComplete] = useState<boolean>(false);
	const [isMounted, setIsMounted] = useState<boolean>(true);

	useEffect(() => {
		const getDetails = async () => {
			let response = await fetch(`api/drinks/${drinkId}`);
			let result: DrinkDetails = await response.json()
			if (isMounted) {
				setIsComplete(true);
				setDrinkDetails(result);
			}
		};

		getDetails();
		return () => setIsMounted(false);
	}, []);

	return {drinkDetails, isComplete};
}