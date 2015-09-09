define([
  'models/todoTask',
  'collections/todoTaskCollection'
], function(TodoTask, TodoTaskCollection) {
  describe('A task', function() {
    var todoTask;

    beforeAll(function() {
      todoTask = new TodoTask();
    });

    it('is defined', function() {
      expect(TodoTask).not.toBeUndefined();
    });
    it('has a title', function() {
      var title = todoTask.get('title');
      expect(title).not.toBeUndefined();
    });
    it('has a done status', function() {
      var doneStatus = todoTask.get('isDone');
      expect(doneStatus).not.toBeUndefined();
    });
  });

  describe('A list of tasks', function() {
    var todoList;

    beforeAll(function() {
      todoList = new TodoTaskCollection();
    });

    it('is defined', function() {
      expect(TodoTaskCollection).not.toBeUndefined();
    });
    it('can contain tasks', function() {
      expect(todoList.model).not.toBeUndefined();
    });
    it('accepts new tasks to be added', function() {
      var todoTask = new TodoTask();
      todoList.add(todoTask);
      expect(todoList.length).toBeGreaterThan(0);
    });
  });
});
