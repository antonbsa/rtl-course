import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color and updates when clicked', () => {
  const { container } = render(<App />);
  // logRoles(container);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'dodgerblue' });
  expect(colorButton).toHaveTextContent('Change to red');
});

test('button disabled when the checkbox is checked', () => {
  render(<App />);

  // Initial state
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');
  expect(colorButton).toBeEnabled();
  expect(screen.getByText('Disable button')).toBeInTheDocument();

  // Clicking checkbox disables button
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  expect(screen.getByText('Enable button')).toBeInTheDocument();

  // Clicking checkbox again enables button
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
  expect(screen.getByText('Disable button')).toBeInTheDocument();
})
