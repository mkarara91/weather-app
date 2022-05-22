import React from 'react';
import {shallow} from "enzyme";
import {Provider} from 'react-redux';
import {store} from '../../app/store';
import App from '../../component/App';

test("app should match snapshot", () => {
    const c = shallow(<Provider store={store}>
        <App/>
    </Provider>);
    expect(c).toMatchSnapshot();
});
