import { render, screen } from '@testing-library/react';
import ExamplesAppClone from 'containers/ExamplesAppClone';

test('renders learn react link', () => {
  render(<ExamplesAppClone />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
