import { useState } from 'react';
import Check from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button';
import '../../styles/pages/summary/SummaryForm.css';

export function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxLabel = (
    <label htmlFor="terms-and-conditions">
      I agree to{' '}
      <a target="_blank" href="/terms-and-conditions">
        Terms and Conditions
      </a>
    </label>
  );

  return (
    <div className="summary-form">
      <Check
        id="terms-and-conditions"
        label={checkboxLabel}
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      />
      <Button
        size="lg"
        type="submit"
        variant={isChecked ? 'light' : 'outline-light'}
        disabled={!isChecked}
      >
        Confirm order
      </Button>
    </div>
  );
}
