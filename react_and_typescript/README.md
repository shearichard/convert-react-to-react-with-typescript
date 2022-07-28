# Converting from pure React to React+Typescript

## What do we need to do ? 
*This is a tentative list, we may find other things as we go along.* 

### Project Level

   * Clone the existing project 
   * `npm install` the typescript libraries as shown [here](https://create-react-app.dev/docs/adding-typescript/#installation).  
   * Rename all `.js` so that they have a `.tsx` suffix.
   * Where external libraries are used it's necessary to ensure that they have declaration files which contain definitions of the types used the library. 

### Code Level

   * Change imports so that they no longer have a suffix so `import {Foo} from foo.jsx` becomes `import {Foo} from foo`
   * For objects which are part of the project define an `interface` ([doco](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces))  
   * Provide types for arguments passed to Utility functions (eg the `id` argument passed to `deleteTodoItem` function in the `ToDo` component).
   * Provide types for returned values from Utility functions (eg the returned value from `deleteTodoItem` function in the `ToDo` component).
   * Provide types for `useState` hook values (eg the two `useState` hooks used in the `ToDo` components).
   * Provide types for `props` arguments such as `id`, `text` and `onDelete` passed into the `ToDoItem` component.
   * Remove any `proptypes` which were defined in components, such as `TodoItem.propTypes` in the `ToDoItem` component. 

 
