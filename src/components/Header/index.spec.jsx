import { render, cleanup } from "@testing-library/react";
import Header from ".";

afterEach(cleanup);
const HeaderComponent = () => render(<Header />);

describe("Unit tests for the Header component", () => {
  it("renders header", () => {
    const { container } = HeaderComponent();
    expect(container).toBeInTheDocument();
  });
});
