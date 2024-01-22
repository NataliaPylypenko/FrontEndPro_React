[FrontEndPro_React](https://nataliapylypenko.github.io/FrontEndPro_React/)

## Project Structure:

* `src/assets` - all global images
* `src/component` - components that consist of several ui or those that cannot be reused
* `src/layouts` - all layouts, what is always on the page (Header, Footer, Navbar, Sidebar...)
* `src/mock` - all temporary files for testing and demonstration of the project
* `src/sections` - all large blocks containing several components
* `src/ui` - all ui, reusable components (Button, List, Item, Input...)
* `src/utils` - all reusable functions, custom hooks

## GitHub Pages

* Go to Settings / Pages
* In the tab GitHub Pages find Source, select branch main, push the Save
* Copy the unique link (UL)
* Then go to the project on package.json

``` js
...
"homepage": "[unique_link]/",
...
"scripts": {
    ...
    "deploy": "gh-pages -d [the_name_of_the_build_folder]",
    "predeploy": "npm run build"
  },
...
```

* Install the package `npm install gh-pages --save-dev`
* Go to Settings / Pages
* In the tab GitHub Pages find Source, select branch gh-pages, push the Save
* For deploy to the branch gh-pages `npm run deploy`

