import { observer } from 'mobx-react-lite';
import '../styles/App.css';

import { useContext } from 'react';
import { Context } from '../index';

export default observer (function Content () {
	const { store } = useContext(Context)
  return store.selectedComponent
})