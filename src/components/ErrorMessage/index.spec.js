import { screen, render, cleanup } from '@testing-library/react';
import ErrorMessage from '.';

afterEach(cleanup);
const ErrorMessageComponent = () =>
  render(<ErrorMessage>Error Test</ErrorMessage>);

describe('Unit tests for the ErrorMessage component', () => {
  test('it renders error component with appropriate error message', () => {
    const { container } = ErrorMessageComponent();
    expect(container).toBeInTheDocument();
    expect(screen.getByText('Error Test')).toBeInTheDocument();
  });
});
