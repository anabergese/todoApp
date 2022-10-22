/**
 * @jest-environment jsdom
 */
import { test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { createContext } from "react";

import Task from "../Components/Task";

test("Complete Button changes to Redo text, after click", async () => {
  const task = {
    title: "Task example",
    description: "Description example",
    status: "Uncompleted",
    key: "key-1",
    id: "task-1",
  };
  const AlltasksContext = createContext([task, () => {}]);

  const tasks = render(
    <StaticRouter>
      <Task alltasks={AlltasksContext} />
    </StaticRouter>
  );
  const completeButton = await task.findByTestId("completeButton");
  // console.log(<Task key="x1" id="x2" status="Uncompleted" />);
  console.log(task);
  //fireEvent.click(completeButton);

  // expect(h1text.innerHTML).toMatch("What's the plan for today?");
});
