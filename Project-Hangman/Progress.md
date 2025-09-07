# Concepts that I've covered:

- **Component-Driven Architecture**:

  - Building UIs from reusable UI components/elements.
  - React elements are used to make those components.

- **CDN Links**

  - Deliver static files.

- **JSX -> Pure React Code(which is eventually JS Code), this conversion is called transpilation**

  - Transpilation done by -> Babel.

- **set-up the Vite project for React**

  - just we set up the CDN links for React & ReactDOM, if we keep manually adding links like this, for other third party tools as well then we would have a lot of 'src' files and configuration code in our file, which will become messy and eventually all we would see the configuration code in our file not the actual code that we wanna run.
  - for that we use framework/starter/scaffolder.
  - Framework vs scaffolder vs starter: https://chatgpt.com/c/68abfea4-a440-832f-a842-56e20d1222be

- **Component**

  - Just a function, and always start with upper case, otherwise error.
  -

- **Exporting/importing modules**

  - We have two ways: 'ES'(module) and 'CJS'(commonjs) moduling.
    - 1. In ES we have 'named' and 'default' export
      - Default: export default function-name; | to import this we use: import funtion-name from file-path;
        - in this default we export only one function, and can import it using any name(nick-name). In fact we can export by adding 'export default' in front of the function/variable/class.
      - Named: export function-name; | to import this we use object: import {-,-,-} from file-path;
        - we can export by adding 'export' in front of the function/variable/class. if we don't use 'default' keyowrd it'll automatically behave as a named export.
        - we can alias our named import, for e.g, import {button as btn} from file-path;
      - Note: if we want to write mix of both world, we can do it, but first 'named export' and at the bottom of the file we can write 'export default'.
    - 2. CJS(commonjs)
      - Default: to export: 'module.exports' | to import: 'const name-> require('file-path');'
      - Named: to export: 'module.exports' with object | to import:

- **Set-up folder structure**

  - Like user-defined components into src/components/Component1.jsx
  - make sure each component we make, it should be saved as Component name with first letter capital.

- **Props**

  - Note: We can access 'props' which is an object, without even passing any parameters to a component, react itself gives this feature to every component.
  - e.g, of props -> <Button text "click me" more "somthing"/>

- **CSS**

  - If we want to write CSS manually, we don't have to export it, but the file using it, it should import it.
  - to give custom tailwind value, use [].

- **JSX**

  - in each component we can't return mulitple components(elements), for ex -> return(<h1>hello</h1> <p>p</P>); we can't do that, we can only return one component(a parent element ex, <div>...</div> only), and that is parent component in which multiple childerens are written within it. if we wanna do that, read below line...
  - we can return multiple components by using fragments(<>...</>), but we can't style it(fragment).

- **Presenter-container design pattern in React**

  -

- **Why React doesn't track the normal varibales in a component?**

- Bcz, In react the normal variable are used to write the business logic not to track the variable, if we use normal variable to track it'll apply only at initial stage just to render a component, only once. post that we can't use it to render the UI or component again.
- For that we use state variables.

- **React Hooks -> special functions**

- useState() -> returns a state variable in a form of array, then we destructure it.

- **Routing in React**
- react-router-dom -> 3rd party library

  - using two ways we can direct to another page/route
    - Using 'Link'
    - redirection but after only some logics. using -> 'useNavigate()' hook, given by library itself.

- H/w -> in React using react-router-dom, how can we go from route/page to another route/page with some data, so that we can access that data in our 2nd page which was passed from 1st page? find the best optimal solution for our game.?

  - 1. Given by react-router-dom: navigate(`/play?text=${value}`); -> using query params, but we can see the data in params explicitly.
       _useSearchParam() hook provided by RRD, to fetch that query params_

    - example:
      - const [queryParam] = useSearchParams(); -> 1st hook
      - console.log('query params:',queryParam.get("text"));

  - 2. using Path params: 
    -example:
      - <Route path="/play/:text" element={<PlayGame/>}/> -> :variable-name, we define it to get path params from other page or route.
      - navigate(`/play/${value}`); -> here we pass the value.
      - let {text}= useParams(); -> used via a hook.
      *but we can see the params in the URL again.*

  - 3. navigate(`/play`,{state:{selectedWord:value}});
    - example:
      - const {state:{selectedWord}} = useLocation(); -> a hook
      *now we can't see the params in the URL, yeaaaaaaaaahhhhhhhhhhhhh*

  - 4. useContext API or Redux, zustand & mobex etc...



- **Conditional Rendering**
  - using ternay operator.

