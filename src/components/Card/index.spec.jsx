import { render } from '@testing-library/react';
import Card from '.';

describe('Unit tests for the Card', () => {
  it('renders Card', () => {
    const CardComponent = () => render(<Card />);
    const { container } = CardComponent();
    expect(container).toBeInTheDocument();
  });
});
