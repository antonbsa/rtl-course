import { fireEvent, render, screen } from '@testing-library/react';
import { SummaryForm } from '../SummaryForm';

const getCheckbox = () => screen.getByRole('checkbox', { name: /terms and conditions/i });
const getButton = () => screen.getByRole('button', { name: /confirm order/i });

test('initial conditions', () => {
  render(<SummaryForm />);
  const checkbox = getCheckbox();
  const button = getButton();

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test('button should be enabled when checking the checkbox', () => {
  render(<SummaryForm />);
  const checkbox = getCheckbox();
  const button = getButton();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
