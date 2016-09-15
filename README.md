# komposer behaviour

Minimal repo showing weird behaviour seen when using react-komposer and composeAll in particular.

It seems that after the initial render, any property change will re-run ALL composers and 
the final component before the onData is called.

This means that when a property is updated, the top-level composer will run and so will the 
next level composer and so will the render method on the component, all BEFORE the onData of the top-level
composer has run. When the top-level composer is ready and calls onData, the next level composer will run again
and the component will also render BEFORE the composer calls onData. Finally when the last composer calls onData
the component will render again - that's 3 times for one property change.

When first run, the output below is produced as expected.

```
initial app data: 53
my-component.js:38 composer2 running, data from app is 53
my-component.js:41 composer2 ready, sending 54
my-component.js:29 composer1 running, data from c2 is 54
my-component.js:32 composer1 ready, sending 55
my-component.js:14 MyComponent rendering: 55
````

After hitting the update button, which triggers a prop change, the output becomes:

```
new app data: 77
my-component.js:38 composer2 running, data from app is 77
my-component.js:29 composer1 running, data from c2 is 54  <<<< runs before onData, with stale props
my-component.js:14 MyComponent rendering: 55              <<<< spurious render
my-component.js:41 composer2 ready, sending 78
my-component.js:29 composer1 running, data from c2 is 78  <<<< as expected
my-component.js:14 MyComponent rendering: 55              <<<< another spurious render
my-component.js:32 composer1 ready, sending 55            
my-component.js:32 composer1 ready, sending 79
my-component.js:14 MyComponent rendering: 79              <<<< third render
```

It's possible to add shouldComponentUpdate to avoid the extraneous renders, but there's no way to prevent
the last composer from running multiple times (and potentially duplicating expensive data fetch operations) since
the composers have no state.


