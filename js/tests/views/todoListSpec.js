define([
  'models/todoTask',
  'collections/todoTaskCollection',
  'views/todoList'
], function(TodoTask, TodoTaskCollection, TodoList) {
  describe('A todo list view', function() {
    var todoTask,
        todoTaskCollection,
        todoList;
    var el;

    beforeAll(function() {
      todoTask = new TodoTask({title: 'Test task'});
      todoTaskCollection = new TodoTaskCollection([todoTask]);
      todoList = new TodoList({collection: todoTaskCollection});
      el = todoList.render().$el;
    });

    it('is defined', function() {
      expect(TodoList).toBeDefined();
    });
    it('is initialized and rendered', function() {
      expect(el.find('li span').text()).toBe('Test task');
    });
  });
});
