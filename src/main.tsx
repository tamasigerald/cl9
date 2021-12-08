import { render } from 'react-dom';
import Routes from '@/routes/Routes';

import 'reset.css';
import '@/styles/styles.scss';

const rootElement = document.getElementById('root');
render(<Routes />, rootElement);
