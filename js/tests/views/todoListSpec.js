define([
  'jquery',
  'rivets',
  'models/todoTask',
  'collections/todoTaskCollection',
  'views/todoList'
], function($, rivets, TodoTask, TodoTaskCollection, TodoList) {
  describe('The todo-list view', function() {
    var todoTask,
        todoTaskCollection,
        todoList;
    var el;

    beforeAll(function() {
      todoTask = new TodoTask({title: 'Test task'});
      todoTaskCollection = new TodoTaskCollection([todoTask]);
      todoList = new TodoList({el: $('#test-container'), collection: todoTaskCollection});
      el = todoList.render().$el;
    });

    afterAll(function() {
      todoList.remove();
    });

    it('is defined', function() {
      expect(TodoList).toBeDefined();
    });
    it('is initialized and rendered', function() {
      expect(el.find('.todo-task span').first().text()).toBe('Test task');
    });
    it('crosses out a task as "done" when it is selected', function() {
      el.find('.todo-task input').first().trigger('click');
      expect(el.find('.todo-task').first().hasClass('done')).toBe(true);
    });
  });
});
