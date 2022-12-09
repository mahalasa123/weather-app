import { render, screen } from '@testing-library/react';
import SearchInput from '.';

describe('Unit tests for the SearchInput', () => {
  it('renders SearchInput', () => {
    const { container } = render(<SearchInput />);
    expect(container).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: '' })).toBeInTheDocument();
  });

  it('renders the expected button', () => {
    render(<SearchInput />);
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
});
