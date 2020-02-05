# React assignment
Work individually to finish this assignment. You can ask for help from your pair mate, other class mates or instructors

## Assignment 1
Convert the personal porfolio Website that you've done as previous assignments into a React-based Web app using [create-react-app](https://github.com/facebook/create-react-app)

* It has to look good (because you may use it as your personal Website after the course).
* It has to be responsive with a mobile menu (the harmburger menu).
* Preferrably using the CSS/SASS styles (since it'll be easier to customize the look-and-feel of the site - remember it's your personal Website, not a company Web app) that you've already written but if you want to use it with React-Boostrap or Material-UI, you can also use it.
* Use as much stateless functional components as you can.
* Use components folder structure for a large app (e.g, each component has its own folder).
* Use ESLint (ask Google how to do that with `create-react-app`)

When done (or even not done but you want to have a review), make a PR to upstream, tag pair mate & instructors as reviewers.

## Assignment 2
Write a custom hook that does:

* Given a country name (international or native), returns a country object from [countries APIs](https://restcountries.eu/). You may use caching for better performance.
* The example usage of the hook is like this:
```
const [error, country] = useCountry('Suomi')
```
* Convert that hook into a HoC

## Assignment 3
Convert any of your existing React apps:

* Use functional components instead of class components
* Use hooks, HoC, render props if you can
