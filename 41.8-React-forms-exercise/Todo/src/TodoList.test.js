import { render } from "@testing-library/react";
import React from "react";
import TodoList from "./TodoList";

// Smike Test
it("Todo component renders without crashing", function () {
    render(<TodoList />);
});

// Snapshot Test 
it("Current structure matches structure in snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});


it("Has H1 in document", () => {
    const { getByText } = render(<TodoList />);
    const h1 = getByText("To-do List");
    expect(h1).toBeInTheDocument();
});

