import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TodoModuleBase } from "./base/todo.module.base";
import { TodoService } from "./todo.service";
import { TodoController } from "./todo.controller";
import { TodoResolver } from "./todo.resolver";

@Module({
  imports: [TodoModuleBase, forwardRef(() => AuthModule)],
  controllers: [TodoController],
  providers: [TodoService, TodoResolver],
  exports: [TodoService],
})
export class TodoModule {}
