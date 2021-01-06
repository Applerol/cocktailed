export type DrinkDetails = {
	id: number,
	name: string,
	description: string,
	ingredients: IngredientListing[]
}

export type IngredientListing = {
	name: string,
	measure: string
}