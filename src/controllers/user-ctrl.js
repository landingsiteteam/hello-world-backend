import { User, Role } from '../models/index.js';

class UserController {
  async list(ctx) {
    const where = ctx.query;
    const users = await User.findAll({ where });
    if (users.length === 0) {
      await User.create({ name: 'Administrator', Roles: [{ name: 'Adminitrator' }] }, { include: { model: Role } });
    }
    ctx.body = { users };
  }
  async find(ctx) {
    const { id } = ctx.params;
    const user = await User.findByPk(id, { include: { model: Role } });
    ctx.body = { user };
  }
  async create(ctx) {
    const _user = ctx.request.body;
    await User.create(_user);
    ctx.body = {};
  }
  async update(ctx) {
    const _user = ctx.request.body;
    const { id } = ctx.params;
    if (id) {
      const user = await User.findByPk(id);
      if (user) {
        await User.update(_user);
      }
    }
    ctx.body = {};
  }
  async delete(ctx) {
    const { id } = ctx.params;
    if (id) {
      const user = await User.findByPk(id);
      if (user) {
        await User.destroy();
      }
    }
    ctx.body = {};
  }
}
export default UserController;
