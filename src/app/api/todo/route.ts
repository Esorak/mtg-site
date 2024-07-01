// export async function GET(): Promise<Response> {
//   const connexion = await Connection.getInstance();

//   const repo = new TodoRepository(connexion);
//   const todos = await repo.findall();
//   return new Response(JSON.stringify(todos.map((todo) => TodoConverter.toDTO(todo))));
// }

// const deleteSchema = z
//   .object({
//     id: z.string(),
//   })
//   .transform((data) => BigInt(data.id));

// export async function DELETE(req: Request): Promise<Response> {
//   let id;

//   try {
//     id = deleteSchema.parse(await req.json());
//   } catch (e) {
//     return new Response(JSON.stringify({ error: "invalid data" }));
//   }

//   const connexion = await Connection.getInstance();
//   const repo = new TodoRepository(connexion);
//   await repo.supprTodo(id);
//   return new Response("ok");
// }
// const patchSchema = z.object({
//   id: z.string().or(z.number()),
//   tache: z.string().min(1, "Task cannot be empty"),
// });

// export async function PATCH(req: Request): Promise<Response> {
//   let data;
//   try {
//     data = await req.json();
//     patchSchema.parse(data);
//   } catch (e) {
//     return new Response(JSON.stringify({ error: "invalid data" }));
//   }

//   const connexion = await Connection.getInstance();
//   const repo = new TodoRepository(connexion);
//   const todo = await repo.modifTodo(data.id, data.tache);

//   const updatedTodoDTO = TodoConverter.toDTO(todo);
//   return new Response(JSON.stringify(updatedTodoDTO));
// }

// const postSchema = z.object({
//   tache: z.string().min(1, "Task cannot be empty"),
// });

// export async function POST(req: Request): Promise<Response> {
//   let data = await req.json();
//   try {
//     postSchema.parse(data);
//   } catch (e) {
//     return new Response("invalid post");
//   }

//   const { tache } = data;
//   const id = BigInt(Date.now());
//   const newTodo: Todo = new Todo(id, tache);

//   const connexion = await Connection.getInstance();
//   const repo = new TodoRepository(connexion);
//   await repo.saveTodo(newTodo);

//   const newTodoDTO = TodoConverter.toDTO(newTodo);

//   return new Response(JSON.stringify(newTodoDTO));
// }
