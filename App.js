// const ele = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "hello world React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(ele);
const heading1 = React.createElement("h1", { id: "heading" }, "react 2");
const heading2 = React.createElement("h2", { id: "heading" }, "react 3");
const div3 = React.createElement("div", { id: "child2" }, [heading1, heading2]);
const div2 = React.createElement("div", { id: "child" }, [heading1, heading2]);
const div1 = React.createElement("div", { id: "parent" }, [div2, div3]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);
