import { Role } from '../models/index.js';

class RoleController {
  async list(ctx) {
    const where = ctx.query;
    const roles = await Role.findAll({ where });
    ctx.body = { roles };
  }
  async create(ctx) {
    const _user = ctx.request.body;
    await Role.create(_user);
    ctx.body = {};
  }
  async update(ctx) {
    const _user = ctx.request.body;
    const { id } = ctx.params;
    if (id) {
      const role = await Role.findByPk(id);
      if (role) {
        await role.update(_user);
      }
    }
    ctx.body = {};
  }
  async delete(ctx) {
    const { id } = ctx.params;
    if (id) {
      const role = await Role.findByPk(id);
      if (role) {
        await role.destroy();
      }
    }
    ctx.body = {};
  }
}
export default RoleController;
