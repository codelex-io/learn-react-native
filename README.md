# Learn React Native

# Useful Resources

-   [React TypeScript Cheatsheet @github.com/typescript-cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
-   [Learn the basics of destructuring props in React @freecodecamp.org](https://www.freecodecamp.org/news/the-basics-of-destructuring-props-in-react-a196696f5477)
-   [TypeScript Playground](https://www.typescriptlang.org/play)
-   [TypeScript Documentation](https://www.typescriptlang.org/docs/home.html)

# Day One

## Functions & Class Components

📄📄📄

-   [Function and Class Components @reactjs.org](https://reactjs.org/docs/components-and-props.html#function-and-class-components)

-   [How Are Function Components Different from Classes? @overreacted.io](https://overreacted.io/how-are-function-components-different-from-classes/)

🚧🚧🚧

Create a _Hello World!_ component using a function and using a class.

## Props

📄📄📄

-   [Component and Props @reactjs.org](https://reactjs.org/docs/components-and-props.html)

-   [Props @facebook.github.io/react-native](https://facebook.github.io/react-native/docs/props)

🚧🚧🚧

You probably already know a few programming related skills, for example - Git, JavaScript, TypeScript, React etc.

Let's write down some of the skills you know (up to five) in an app main view. Each of the skill must contain name and a logo or emoji of your choice. Since everything in React is about the reusability of the components, we are going to create a separate component called _Skill_ and pass props to it from _App_.

## State

📄📄📄

-   [State and Lifecycle @reactjs.org](https://reactjs.org/docs/state-and-lifecycle.html)

-   [State @facebook.github.io/react-native](https://facebook.github.io/react-native/docs/state)

🚧🚧🚧

Props exercise allowed us to render stateless list of the skills, but what if we would like to have some state for each of the skills? For example - how many hours we have spent on perfecting each them?

Let's update our _Skill_ component, it must have a counter of hours inside and when you tap on it - counter must increase by one hour.

You must understand one not really clear concept for many beginners - function can be passed as property, read more [Passing Functions to Components @reactjs.org](https://reactjs.org/docs/faq-functions.html)

Now _Skill_ component became **stateful** instead of **stateless**, read more [Stateful and Stateless Components in React @programmingwithmosh.com](https://programmingwithmosh.com/javascript/stateful-stateless-components-react/).

Is it possible to leave _Skill_ component stateless but lift up to _App_ component? It is called [lifting state up @reactjs.org](https://reactjs.org/docs/lifting-state-up.html).

## Style

📄📄📄

-   [Style @facebook.github.io/react-native](https://facebook.github.io/react-native/docs/style)

-   [Applying Basic Styles in React Native @egghead.io](https://egghead.io/lessons/react-applying-basic-styles-in-react-native)

-   [Style Components with StyleSheet @egghead.io](https://egghead.io/lessons/react-native-style-components-in-a-react-native-app-with-stylesheet)

-   [Using Styled Components with React Native @levelup.gitconnected.com](https://levelup.gitconnected.com/using-styled-components-with-react-native-de645fcf4787)

Why do we need to use _StyleSheet_? It is immutable, and fails if we will try to use non-existing property or pass wrong value to any of the properties.

🚧🚧🚧

Let's make our skill list cleaner, add:

-   title
-   background color
-   align & center skills
-   style each skill based on the hours spent, for example more hours makes it darker than others

Try styling the components using Styled Components.

## Height & Width

📄📄📄

-   [Height and Width @facebook.github.io/react-native](https://facebook.github.io/react-native/docs/height-and-width)

🚧🚧🚧

Make title to consume 25% of the screen height, do that using fixed dimensions and flex dimensions.

## Layout with Flexbox

📄📄📄

-   [Layout with Flexbox @facebook.github.io/react-native](https://facebook.github.io/react-native/docs/flexbox)

-   [Flex Direction @yogalayout.com](https://yogalayout.com/docs/flex-direction)

🚧🚧🚧

Let's just recreate an examples from the documentation [here](https://facebook.github.io/react-native/docs/flexbox).

## ScrollView / List Views

-   [Using a ScrollView @facebook.github.io/react-native](https://facebook.github.io/react-native/docs/using-a-scrollview)

-   [Using List Views @facebook.github.io/react-native](https://facebook.github.io/react-native/docs/using-a-listview)

🚧🚧🚧

Now let's get back to our previous _Skill_ component. What happens if there are 20 skills? And 20000?

## Built in Components

-   [Components and APIs](https://facebook.github.io/react-native/docs/components-and-apis.html)

## StoryBook [@storybook.js.org](https://storybook.js.org)

🚧🚧🚧

Navigate to [./index.js](./index.js), set `IS_STORYBOOK` property to `true`.

Now we are going to recreate screens from the [E-Commerce App Template](https://www.figma.com/file/fxBQAYFEsi7L4Oix12qaiF/E-commerce-Application-by-Fively-%2F-Dark), by the way there is also [a light theme available](https://www.figma.com/file/51dVhgTOHJtVoZCuN5RSVb/E-commerce-Application-by-Fively-%2F-Light)

Recreate screens in the following order:

- Sign Up Page
- Login Page
- Forgot Password
- Main 3
- Categories
- Catalog 2
- Product Card
- Product Card / Select Size
- My Bag
- My Bag / Checkout

# Day One - Home Assignment

Complete as much screens as you can for our E-Commerce App. 

# Day Two

In Progress ⌛

# Day Three

In Progress ⌛

# Life After Workshop

## Few Designs to Replicate

- [Tasker (To-Do App)](https://www.figma.com/file/u4kxRfuUwvqn0HH8FUtd6l/Tasker)
- [Quantum Wallet (Finance App)](https://www.figma.com/file/wZJjBZoyaW5zj8xKD9oJK7/Quantum-wallet)
- [Hotel Booking](https://www.figma.com/file/iiH3O8o8iRXbjbmgT3bXw6/Hotel-Booking)
- or search something on your own [@figmafreebies.com](https://www.figmafreebies.com), [@figmacrush.com](https://www.figmacrush.com), [@freebiesui.com](https://freebiesui.com/figma-freebies) or just google _figma freebies_

## Newsletters Worth Subscribing

- [reactnative.cc](http://reactnative.cc)
- [reactnativenow.com](https://reactnativenow.com)

## Publishing App

- [Publishing to Google Play Store @facebook.github.io/react-native](https://facebook.github.io/react-native/docs/signed-apk-android)

## Animations

- [How to create a beautifully animated loader in React Native @freecodecamp.org](https://www.freecodecamp.org/news/how-to-create-a-beautifully-animated-loader-in-react-native-21da37a8f6b0/)
- [Animating Gradients in React Native @medium.com/@GroundControl](https://medium.com/@GroundControl/animating-gradients-in-react-native-8853dbd97d02)

## Other useful stuff

- [Localizing a React Native mobile app @codecentric.de](https://blog.codecentric.de/en/2019/11/localization-react-native-mobile-app-react-context-hooks)
- [An efficient way to structure React Native projects @cheesecakelabs.com](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects)
- [Contextual Typography Styling in React Native @medium.com/@lewie9021](https://medium.com/@lewie9021/contextual-typography-styling-in-react-native-30d22df063a1)
- [List of Curated Resources @github.com/jondot/awesome-react-native](https://github.com/jondot/awesome-react-native)
- [React Native Shadow Generator @ethercreative.github.io](https://ethercreative.github.io/react-native-shadow-generator/)