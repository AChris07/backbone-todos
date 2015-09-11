define([
  'models/todoTask',
  'collections/todoTaskCollection'
], function(TodoTask, TodoTaskCollection) {
  describe('A list of tasks', function() {
    var todoList;

    beforeAll(function() {
      todoList = new TodoTaskCollection();
    });

    it('is defined', function() {
      expect(TodoTaskCollection).toBeDefined();
    });
    it('can contain tasks', function() {
      expect(todoList.model).toBeDefined();
    });
    it('accepts new tasks to be added', function() {
      var todoTask = new TodoTask();
      todoList.add(todoTask);
      expect(todoList.length).toBeGreaterThan(0);
    });
  });
});
