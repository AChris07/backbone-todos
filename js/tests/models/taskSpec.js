define([
  'models/todoTask'
], function(TodoTask) {
  describe('A task', function() {
    var todoTask;

    beforeAll(function() {
      todoTask = new TodoTask();
    });

    it('is defined', function() {
      expect(TodoTask).toBeDefined();
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
});
