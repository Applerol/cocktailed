import { DrinkDetails } from './../../Shared/Models/DrinkDetails';
import { Router } from "express";

const drinksRouter = Router();

drinksRouter.get('/:drinkId', (req, res) => {
	const drinkId = parseInt(req.params.drinkId);
	let drinkDetails: DrinkDetails = {
		id: drinkId,
		name: "apple drink",
		description: "it contains apple",
		ingredients: [
			{name: "apple", measure: "50g"},
		],
	};
	console.log("logged")

	res.status(200).json({drinkDetails});
});

export default drinksRouter;