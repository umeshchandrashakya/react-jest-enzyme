import React from "react";
import ReactDom from "react-dom";
import App from "components/App";
import { shallow } from "enzyme";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
let component;

beforeEach(() => {
  component = shallow(<App></App>);
});

// it("shows a comment box", () => {
//   const div = document.createElement("div");
//   ReactDom.render(<App></App>, div);
//   //looks inside the div
//   //and check to see if comment box is in there
//   // console.log(div.innerHTML);

//   expect(div.innerHTML).toContain("Comment Box");
//   ReactDom.unmountComponentAtNode(div);
// });

//using enzyme
it("show a comment box", () => {
  expect(component.find(CommentBox).length).toEqual(1);
});

it("show a comment List Component", () => {
  const component = shallow(<App></App>);
  expect(component.find(CommentList).length).toEqual(1);
});
