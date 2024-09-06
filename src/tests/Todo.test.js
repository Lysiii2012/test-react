import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../store';
import App from '../App';

describe('Todo App Tests', () => {
    test('should render the page with the title "Add Todo"', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const titleElement = screen.getByRole('heading', { name: /Add Todo/i });
        expect(titleElement).toBeInTheDocument();
    });

    test('input field should accept numbers and letters', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('What I need');
        fireEvent.change(inputElement, { target: { value: 'Test123' } });
        expect(inputElement.value).toBe('Test123');
    });

    test('should not add a todo when the input is empty and "Add" is clicked', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const buttonElement = screen.getByText('Add Todo');
        fireEvent.click(buttonElement);

        const todoItems = screen.queryAllByRole('listitem');
        expect(todoItems.length).toBe(0);
    });

    test('should add a new todo when text is entered and "Add" is clicked', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('What I need');
        fireEvent.change(inputElement, { target: { value: 'New Todo' } });

        const buttonElement = screen.getByText('Add Todo');
        fireEvent.click(buttonElement);

        const todoItems = screen.getAllByRole('listitem');
        expect(todoItems.length).toBe(1);
        expect(todoItems[0]).toHaveTextContent('New Todo');
    });

    test('input should clear after adding a todo', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('What I need');
        fireEvent.change(inputElement, { target: { value: 'Clear Test' } });

        const buttonElement = screen.getByText('Add Todo');
        fireEvent.click(buttonElement);

        expect(inputElement.value).toBe('');
    });
});
