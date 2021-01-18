import { Router } from "https://deno.land/x/oak/mod.ts";

import { addUser } from "./handlers/addUser.ts";
import { deleteUser } from "./handlers/deleteUser.ts";
import { getAllUser } from "./handlers/getAllUser.ts";
import { updateUser } from "./handlers/updateUser.ts";
import { getUser } from "./handlers/getUser.ts";
import { welcom } from "./handlers/welcom.ts";


const router = new Router();

router.get("/", welcom)
  .get("/user", getAllUser)
  .get("/user/:id", getUser )
  .post("/user", addUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);

export default router;
