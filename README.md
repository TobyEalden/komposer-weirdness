# komposer behaviour

Minimal repo showing weird behaviour seen when using react-komposer. 

When first run, the output below is produced as expected.

```
initial app data: 64
my-component.js:34composer2, data from app is 64
my-component.js:37 composer2 ready, sending 65
my-component.js:25 composer1, data from c2 is 65
my-component.js:28 composer1 ready, sending 66
my-component.js:10 MyComponent rendering: 66
````

After hitting the update button, the output becomes:

```
new app data: 9
my-component.js:34 composer2, data from app is 9
my-component.js:25 composer1, data from c2 is 65
my-component.js:10 MyComponent rendering: 66
my-component.js:37 composer2 ready, sending 10
my-component.js:25 composer1, data from c2 is 10
my-component.js:10 MyComponent rendering: 66
my-component.js:28 composer1 ready, sending 66
my-component.js:28 composer1 ready, sending 11
my-component.js:10 MyComponent rendering: 11
```

