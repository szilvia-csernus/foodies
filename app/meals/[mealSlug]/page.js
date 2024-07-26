export default function MealDetails({ params }) {
  return (
    <main>
      <h1>Meal Details</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
