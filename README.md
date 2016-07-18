### Usage

When you want to access get parameters from browser.


### Example

Suppouse we have link with query parameters:
`http://localhost/home?name=Joe&subs=1,2,3`


```js

import getQuery from 'get-query';

const urlGetParams = getQuery();  // { name: "Joe", subs: [1,2,3] }

```


### License

The MIT License (MIT)

Copyright (c) 2016 Sabbir Ahmed
