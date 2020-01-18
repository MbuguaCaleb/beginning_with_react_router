**React Router**

```
Traditional HTML Way is that when you want to render a different page navigation to the different page is by rerendering that whole page.

React Router brings in a whole new change to this in that instead of rerendering the whole page you only render the specific components.

For this particular functionality we should install the react library for routing.


```

```

React router helps you map your components as per which component you want to render..and not all of them mounting all at once.

```

```
To implement the Router in react you render all the components under the
Router and then Route to specify the paths for the separate component routes.

<Router>
<Route path ="/home" component ={Home}></Route>
<Route path ="/about" component ={About}></Route>
</Router>


```

```
Switch is a  very important library in react that helps to avoid
overlapping once a matching pattern to the URL you are mapping to the router has been detected.

exact key word is important so that the router does not stop at the first match

```
