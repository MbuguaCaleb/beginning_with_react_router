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

```
React router link simulates a href in normal HTML and CSS.

  <Link to='/about'>
<li>About</li>
</Link>



```

```
State by defacto when setting up takes two parameters.

  const [items, setItems] = useState([]);

(i)param 1 is the name of the state

(ii)param 2 is a method which when excuted has an effect or calls the useState thus calling up the state.

(iii)UseState should implify the format in which the state is being received.Like i the example above the state is of the format of an array.

```

```
When looping through react you should always include a key ->unique identifier for each record.

{items.map(item => (
<h1 key={item.id}>{item.name}</h1>
))}
```

```
Notes  by MbuguaCaleb

```

```
Tutor devEd
```
