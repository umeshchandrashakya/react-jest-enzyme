import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducers from "reducers";
import Root from "Root";

let warrped;
beforeEach(() => {
  warrped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
  // <Provider store={createStore(reducers, {})}>
  //   <CommentBox />
  // </Provider>
});

it("has a text area and two button", () => {
  expect(warrped.find("textarea").length).toEqual(1);
  expect(warrped.find("button").length).toEqual(2);
});

it("has a text area that user can type in", () => {
  warrped
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  warrped.update();
  expect(warrped.find("textarea").prop("value")).toEqual("new comment");
});

it("when form is submited  text area gets emptied", () => {
  warrped
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  warrped.update();
  warrped.find("form").simulate("submit");
  warrped.update();
  expect(warrped.find("textarea").prop("value")).toEqual("");
});

afterEach(() => {
  warrped.unmount();
});
