/*

1. Browser requests page
2. Server fetches data
3. Server renders HTML
4. Browser receives READY HTML
5. Browser paints immediately




SSR feels faster

Browser rendering + JS execution is EXPENSIVE.

Especially on:

low-end Android
slow CPUs

Servers are much stronger.
So moving rendering work to server helps weak devices a lot.

SSR reduces: client-side computation before first paint
*/