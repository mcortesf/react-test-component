import 'i18n/config';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/icons/style.css';
import { FormValidation } from './HOC';
import { RouterConfig } from './navigation/RouterConfig';
import './styles/normalize.css';
import './styles/styles.css';
import './styles/text.css';

function App() {
  // AuthInterceptor();
  // ErrorInterceptor();
  return (
    <div className="App">
      <FormValidation>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </FormValidation>
    </div>
  );
}

export default App;
