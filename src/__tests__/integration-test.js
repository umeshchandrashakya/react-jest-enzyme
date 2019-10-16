import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "dkkdkdkdkkd" }, { name: "smdmlsllfsl;sk;lkls;" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("fetch a list of comments and display them", done => {
  //Attempt to render entire app
  const warpped = mount(
    <Root>
      <App></App>
    </Root>
  );
  //find the fetchcomment button and click it
  warpped.find(".fetch_comments").simulate("click");
  moxios.wait(() => {
    warpped.update();
    expect(warpped.find("li").length).toEqual(2);
    done();
    warpped.unmount();
  });

  //expect to find a list of comment with 500 comment
});
