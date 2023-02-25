import { render } from "@testing-library/react";
import App from './App';


// Smike Test
it("App renders without crashing", function () {
    render(<App />);
});

// Snapshot Test 
it("Current structure matches structure in snapshot", function () {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});

