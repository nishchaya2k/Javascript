/*
1.  Web Storage Api: is used by developers store some data in web browser, in key-value pairs

2.  Two Mechanism to store data:
->  Local Storage and Session Storage

i).  Session Storage: Data is persisted only for that particualar session

what is session? suppose user is visiting a webapp and as soon as it visits the webapp a session is started and data which is stored in that session storage will only be persisted till he is on that web browser window and as soon as he closes the window and close the tab data is gone.

Why its better than cookies?
Unlike cookies its data is not being send to the server while making the network request call

and Also it has larger capacity to hold data eg 5mb, unlike cookies where few bytes data can only be stored

(ii).   Local Storage: Same as session storage  but it does comes up with expiry even if window or tab close data still be persiste over there, more storage capicity then session
local storage stores on window object
Local storage accepts only string

functions for LocalStorage:

  
*/
