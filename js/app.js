var app = angular.module("kanbanapp", ['ngDraggable']); 

app.controller('maincontroller', function($scope){

	$scope.bugs = ['bug', 'requirement', 'issue', 'feature'];

	// object for stages
	$scope.stages =
				[
					{
						"id": 1,
						"name": "Concept",
					},
					{
						"id": 2,
						"name": "Pending",
					},
					{
						"id": 3,
						"name": "Develop",
					},
					{
						"id": 4,
						"name": "Approved",
					},
					{
						"id": 5,
						"name": "Rejected",
					},
				];

	// object for tasks
	$scope.tasks = 
				[
								{
									"title": "Task Title 1",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "bug",
									"stage_id": 1
								},
								{
									"title": "Task Title 2",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "requirement",
									"stage_id": 1
								},
								{
									"title": "Task Title 3",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "issue",
									"stage_id": 3
								},
								{
									"title": "Task Title 4",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "feature",
									"stage_id": 4
								},
								{
									"title": "Task Title 5",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "requirement",
									"stage_id": 5
								},
								{
									"title": "Task Title 1",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "bug",
									"stage_id": 1
								},
								{
									"title": "Task Title 2",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "requirement",
									"stage_id": 1
								},
								{
									"title": "Task Title 3",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "issue",
									"stage_id": 3
								},
								{
									"title": "Task Title 4",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "feature",
									"stage_id": 4
								},
								{
									"title": "Task Title 5",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "requirement",
									"stage_id": 5
								},
								{
									"title": "Task Title 1",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "bug",
									"stage_id": 1
								},
								{
									"title": "Task Title 2",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "requirement",
									"stage_id": 1
								},
								{
									"title": "Task Title 3",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "issue",
									"stage_id": 3
								},
								{
									"title": "Task Title 4",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "feature",
									"stage_id": 4
								},
								{
									"title": "Task Title 5",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "requirement",
									"stage_id": 5
								},
								{
									"title": "Task Title 1",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "bug",
									"stage_id": 1
								},
								{
									"title": "Task Title 2",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "requirement",
									"stage_id": 1
								},
								{
									"title": "Task Title 3",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "issue",
									"stage_id": 3
								},
								{
									"title": "Task Title 4",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "feature",
									"stage_id": 4
								},
								{
									"title": "Task Title 5",
									"img": "https://material.angularjs.org/latest/img/washedout.png",
									"description": "This is cards description. This is cards 	description. This is cards description. This is cards description. This is cards description.",
									"status": "concept",
									"type": "requirement",
									"stage_id": 5
								},

				];

	// function for drag start
	$scope.dragStart = function dragStart(event, task){
		task.dragging = true;
	}

	// function for on dropping
	$scope.onDrop = function onDrop(data,event,stage){
		if(data && data.stage_id != stage.id){
			data.showMore = false;
			data.stage_id = stage.id;
			data.dragging = false;
		}
	}		

	$scope.newTask = {};
	// function for creating new task
	$scope.pushTask = function pushTask(){
		$scope.tasks.push($scope.newTask);
		$scope.newTask = {};
	}

	// show more
	$scope.showMore = function showMore(task){
		if(task.dragging == true)
			return;

			if(task.showMore == true){
				task.showMore = false;
			}
			else{
				task.showMore = true;	
			}
	}


	// delete task
	$scope.deleteTask = function deleteTask(task){
		var idx = $scope.tasks.indexOf(task);
		$scope.tasks.splice(idx, 1);
	}

	$scope.exportTasks = function exportTasks(){
		var x = window.open();
	    x.document.open();
	    x.document.write('<html><body><pre>' + JSON.stringify($scope.tasks, null, 2) + '</pre></body></html>');
	    x.document.close();
	}

});