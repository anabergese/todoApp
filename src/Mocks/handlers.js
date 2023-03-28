// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a GET /tasks request
  rest.get(
    "https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            created_at: 1673888457325,
            title: "Task example",
            description: "Description example",
            photo: "",
            status: "Uncompleted",
            deadline: "",
            subtasks: [
              {
                id: "id1",
                key: "id2",
                name: "Buy birthday present",
                task_id: "56",
              },
            ],
          },
          {
            id: 2,
            created_at: 1677938441705,
            title: "Task example 2",
            description: "Description example 2",
            photo:
              "blob:http://localhost:1234/4789a11b-118f-4b9c-9bee-f55043623132",
            status: "Uncompleted",
            deadline: "2023-03-04",
            subtasks: [],
          },
        ])
      );
    }
  ),

  rest.post(
    "https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/tasks",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: 3,
          created_at: 1673888457325,
          title: "Task example 3",
          description: "Description example 3",
          photo: "",
          status: "Uncompleted",
          deadline: "",
          subtasks: [
            {
              id: "id1",
              key: "id2",
              name: "Buy birthday present",
              task_id: "3",
            },
          ],
        })
      );
    }
  ),
];
