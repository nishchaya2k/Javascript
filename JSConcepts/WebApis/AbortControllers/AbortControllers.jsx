/* 

- Abort Controller: The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.

1. It's not the part of javascript language itself
2. Its a web api, meaning its implemented by browser & some server side environments like deno.
3. Its a Gobal Class in js, used to abort things, Anything From a timers to Promses to websockets to events


- Why Would we use it?

1. To be more verbose, to be more descriptive about what we are doing
2. Different Developers follow different convention, different naming styles, no matter how strong your guideline is, there always a breakpoint, where everything is sidelined.
Having a commong practice, always help.
3. Standard way for cancelling things, align with libraries code, Library code becomes more friendly 


- Use Cases

1. Cancelling Timers
2. Cacelling Promises
3. Cancelling Fetch
4. Cancelling Event Listeners
5. Cancelling Websockets Connection


- When you can Use & When to Skip

-> When its useful
1. You have multiple timeouts to cancel together
2. You want to cancel timeouts & fetech in a single cell
3. You want to clean up event listeners automatically

-> When to stick with clearTimeout()
1. You have single setTimeout to cancel
2. You dont need to group multiple asyc task under one controller.
3. 


*/ 