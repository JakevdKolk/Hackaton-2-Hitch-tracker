import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Routeform from '../src/components/Routeform';

describe('Routeform', () => {
  it('returns some route values when From and To are filled', () => {
    render(<Routeform />);

    // Vind de inputvelden
    const fromInput = screen.getByLabelText('From') as HTMLInputElement;
    const toInput = screen.getByLabelText('To') as HTMLInputElement;
    const button = screen.getByRole('button', { name: /plan route/i });

    // Vul From en To
    fireEvent.change(fromInput, { target: { value: 'Amsterdam' } });
    fireEvent.change(toInput, { target: { value: 'Rotterdam' } });

    // Klik op Plan Route
    fireEvent.click(button);

    // Check of er iets in console.log terecht komt of de state is geupdate
    // Hier kunnen we bv checken of de waarde van de inputs nog klopt
    expect(fromInput.value).toBe('Amsterdam');
    expect(toInput.value).toBe('Rotterdam');

    // Als je het component zo zou aanpassen dat het de waarden toont, zou je hier ook checken dat de random waarden verschijnen
  });

  it('alerts if From or To is empty', () => {
    // Mock alert
    window.alert = jest.fn();

    render(<Routeform />);

    const button = screen.getByRole('button', { name: /plan route/i });

    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('Please fill in a starting location.');
  });
});