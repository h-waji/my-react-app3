import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { useState, useCallback, useMemo } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';

import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page1_A } from "./Page1_A";
import { Page1_B } from "./Page1_B";

export const App = () => {
  console.log("----- App -----");
  const [text, setText] = useState('');
  console.log(text);
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClidkClose = useCallback(() => setOpen(false), []);

  const temp = useMemo(() => 6 + 4, []);
  console.log(temp);

  return (
    <div>
      <BrowserRouter>
        <h1>React Router</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1" render={({ match: {url} }) => (    
            <Switch>
              {console.log(url)}
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/A`}>
                <Page1_A />
              </Route>
              <Route path={`${url}/B`}>
                <Page1_B />
              </Route>
            </Switch>
          )}>
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </BrowserRouter>
      <br />
      <br />
      <br />
      <h1>CSS</h1>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      <br />
      <br />
      <h1>memo, useCallback</h1>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClidkClose={onClidkClose} />
    </div>
  );
};
