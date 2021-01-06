import React from 'react';
import useDrinkDetails from '../Hooks/useDrinkDetails';

export type Props = {
	drinkId: number,
};

export const DrinkCard = ({ drinkId }: Props) : React.FunctionComponentElement<Props> => {
	let { drinkDetails, isComplete } = useDrinkDetails(drinkId);
	return isComplete ? <div /> : <div>{drinkDetails?.name}</div>
};