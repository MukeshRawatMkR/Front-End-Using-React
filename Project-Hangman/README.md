#

**Presenter-container design pattern in React**

-

**Why React doesn't track the normal varibales in a component?**

- Bcz, In react the normal variable are used to write the business logic not to track the variable, if we use normal variable to track it'll apply only at initial stage just to render a component, only once. post that we can't use it to render the UI or component again.
- For that we use state variables.

**React Hooks -> special functions**

- useState() -> returns a state variable in a form of array, then we destructure it.


**Routing in React**
- react-router-dom -> 3rd party library
    - using two ways we can direct to another page/route
        - Using 'Link'
        - redirection but after only some logics. using -> 'useNavigate()' hook, given by library itself. 



H/w -> in React using react-router-dom, how can we go from route/page to another route/page with some data, so that we can access that data in our 2nd page which was passed from 1st page? find the best optimal solution for our game.


(15:59)