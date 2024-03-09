import { useState, useCallback, useMemo } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';

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
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      <br />
      <br />
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClidkClose={onClidkClose} />
    </div>
  );
};
