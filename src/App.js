import './App.css';
import PhoneContainer from './composants/PhoneContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import TvContainer from './composants/TvContainer';
import CommentsContainer from './composants/CommentsContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer attention="epuisement"/>
        <TvContainer attention="epuisement"/>
      </div>
      <CommentsContainer />
    </Provider>
  );
}

export default App;
