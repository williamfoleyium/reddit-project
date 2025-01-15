import { Provider } from 'react-redux';
import { store } from './components/store/store';
import PostList from './components/post/PostList';

function App () {
    return (
        <Provider store={store}>
            <div className="App">
                <PostList />
            </div>
        </Provider>
    );
}

export default App;