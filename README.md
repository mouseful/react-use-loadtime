# react-use-loadtime

[![ReactJs][react-image]][react-url]
[![GitHub license][license-image]][license-url]

[react-image]: https://img.shields.io/badge/ReactJS-%5E16.12.0-blue.svg
[react-url]: https://reactjs.org
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/mouseful/react-locale-time/blob/master/LICENSE

<br>

### react hook for load time

<br>

# Install

```
// npm
npm install react-use-loadtime --save
```

<br>

# Usage

```
import LocaleTime from 'react-hook-usetime';

const App = () => {
  const [state, setState] = useState('');
  const [loadTime] = useLoadTime();

  return (
    <div>
      <div>load time: {loadTime}</div>
      <div>state: {state}</div>
    </div>
  );
};
```

<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2019 mouseful

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
