import React, {Component} from 'react'
import {Provider} from 'react-redux'
import ContactForm from './components/ContactForm'
import store from './store'

export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <ContactForm />
            </Provider>
        )
    }
}
