import { render } from "@testing-library/react";
import React from "react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


// //Smoke test for Carousel component
test("Carousel component renders without breaking", () => {
    render(<Carousel />);
});

// //Snapshot Test for Carousel component
test("Current Carousel component state matches snapsot", function () {
    const { asFragment } = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
    const { container } = render(
        <Carousel
            photos={TEST_IMAGES}
            title="images for testing"
        />
    );
    // expect the first image to show, but not the second
    expect(
        container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
        container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(
        container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
        container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
});
