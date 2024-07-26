import Link from 'next/link';
import classes from './page.module.css';

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created {}
          <span className={classes.highlight}>by you</span>

        </h1>
        <p>Choose your faviourite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}> 
          <Link href="/meals">
            Share Your Favourite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>

      </main>
    </>
  );
}
