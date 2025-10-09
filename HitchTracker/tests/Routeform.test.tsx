import { render, screen, fireEvent } from '@testing-library/react';
import InputBox from '../src/components/InputBox';

describe('InputBox (Destination field)', () => {
  it('renders a labeled input for a city destination', () => {
    render(<InputBox name="Destination" value="Amsterdam" onChange={() => {}} />);

    // The label should appear and link to the input
    const label = screen.getByText('Destination');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'Destination');

    // The input should have the correct name, id, and value
    const input = screen.getByRole('textbox', { name: 'Destination' });
    expect(input).toHaveAttribute('name', 'Destination');
    expect(input).toHaveValue('Amsterdam');
  });

  it('calls onChange when a new city name is entered', () => {
    const handleChange = jest.fn();
    render(<InputBox name="Destination" value="" onChange={handleChange} />);

    const input = screen.getByRole('textbox', { name: 'Destination' });

    // Simulate user typing a city
    fireEvent.change(input, { target: { value: 'Rotterdam' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange.mock.calls[0][0].target.value).toBe('Rotterdam');
  });
});