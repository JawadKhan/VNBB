
var msg000 = "Some Unknown Error Occurs";
var msg001 = "Page Loaded Successfully";

var savedObjects = [ 'ids' ]
var toolsId = new Array();
flag = false;
var counter = 0;
var canvas = [];
var data = [];
$(document).ready(function(){	
		/*
		console.log('start');				   
		$('#id_center_canvas').droppable
		({		
			drop:function(event)
			{
				console.log('triggered');
			}
										
		});				   	
		$(function() {
      		$('#id_center_canvas').trigger('drop');
		});

		console.log('stop');   
			*/
	var dropFuntion = $('#id_center_canvas').droppable({ 										 	
									 	accept: '.tools',
										greedy: true,
										tolerance: 'fit',										
										drop: function(event, ui) {
									   //clone and remove positioning from the helper element
										   var cloned = $(ui.helper).clone();
										   //cloned1 = $(ui.helper).clone().css({position:'relative', left:20, top:20});
										   canvas[counter++] = cloned;
										   console.log(ui.helper);
										   $('#id_center_canvas').append(cloned);										   
										   $('#id_center_canvas').css({
																	   'background-color': '#003333'
																	   });
										   var originalHeight = parseInt($("#id_center_canvas").height());
										   var originalWidth = parseInt($("#id_center_canvas").width());
										   cloned.find('.ui-resizable-handle').remove();
										   cloned.find('.ui-draggable-handle').remove();
										   cloned.draggable({ containment: "#id_center_canvas", 
															  opacity: 0.5,
															  axis: 'false' });
										   cloned.resizable({
														animate: true,
														ghost: true,
														start: function(e, ui) {
															
															var maxH = originalHeight - (ui.position.top);
															var maxW = originalWidth - (ui.position.left);
															if(  maxH > 0 && maxW > 0 ){
																cloned.resizable("option","maxHeight",maxH);
																cloned.resizable("option","maxWidth",maxW);
															}
															
														},
														resize: function(e, ui) {
	
															var maxH = originalHeight - (ui.position.top);
															var maxW = originalWidth - (ui.position.left);
															if(  maxH > 0 && maxW > 0 ){
																cloned.resizable("option","maxHeight",maxH);
																cloned.resizable("option","maxWidth",maxW);
															}
															
														},
														stop: function(e, ui) {	
															
														}
														
													});
										}
										
									 });
	//$('#id_recyclebin').droppable({									 });
	
	$(".tools").draggable({
				   // revert: true
				   containment: "#id_center",
				   axis: 'y',
				   revert: 'invalid',
				   opacity: 0.7, 
				   cursor: 'move',
				   helper: myHelper
	}); 
	
	
	$('#id_center_clearNB').click(function(event){	
		clearCanvas();
	});
	
	$('#id_center_saveNB').click(function(event){								  		
		saveCanvas();
	});
	
	$('#id_center_restoreNB').click(function(event){								  
		restoreCanvas();		
	});
});


function saveCanvas(){
	data = [];
	for( i = 0;i < counter;i++ ){
		data[i] = canvas[i];	
	}
	
	//console.log('Save Canvas');
	//console.log(eval(canvas));
	//console.log(eval(data));	
		/*$.ajax({url:"saveNotification.php",
					data: { 
					'id'	:	stateObj.id,
					'top'	:	stateObj.top,
					'left'	:	stateObj.left,
					'width'	:	stateObj.width,
					'height':	stateObj.height
					},
					success:function(result){
						document.write(result);	
					}
		});	
		*/
}

function restoreCanvas(){
	clearCanvas();	
	size = data.length;
	//console.log('Restore Canvas');
	//console.log(eval(data));	
	for( i = 0;i < size;i++ ){		
		var tempElement = document.createElement('div');
		//copyProperties(data[i], tempElement);
		var prop = data[0].css('position');
		console.log(prop);
		tempElement.style.position = data[i].css('position');
		tempElement.style.opacity = data[i].css('opacity');
		tempElement.style.top = data[i].css('top');
		tempElement.style.left = data[i].css('left');
		tempElement.style.overflow = data[i].css('overflow');
		tempElement.style.width = data[i].css('width');
		tempElement.style.height = data[i].css('height');
		tempElement.style.display = data[i].css('display');
		tempElement.style.margin = data[i].css('margin');
		tempElement.style.padding = data[i].css('padding');
		tempElement.style.backgroundColor = data[i].css('backgroundColor');
		tempElement.className = "h";
		tempElement.setAttribute('id', data[i].attr('id'));									  
		canvas[counter++] = tempElement;
		console.log(data[i].attr('class'));
	}	
	showCanvas();
}

function showCanvas(){
	//console.log('Show Canvas');	
	//console.log(eval(canvas));	
	for( i = 0;i < canvas.length;i++ ){
		$('#id_center_canvas').append(canvas[i]);
	}	
	if( canvas.length > 0 ){
		$('#id_center_canvas').css({
										   'background-color': '#003333'
									});
	}
	$(".h").draggable({ containment: "#id_center_canvas", 
							opacity: 0.5,
							 axis: 'false' }).resizable({
														animate: true,
														ghost: true});
}

function clearCanvas(){
	//console.log('Clear Canvas');							   
	for( i = 0;i < counter;i++ ){
		if( canvas[i].attr('class') == 'h' ){
			canvas[i].css({
						  'display':'none'
			});
		}
		else
			canvas[i].hide(2000);			
	}	
	if( counter > 0 ){
		$('#id_center_canvas').css({
										   'background-color': '#006600'
									});
	}
	canvas = [];
	counter = 0;
	//console.log(eval(canvas));	
}

function CurrentState(id, top, left, width, height){
	this.id = id;
	this.top = top;
	this.left = left;
	this.width = width;
	this.height = height;
}
function addStateObj(obj){
	savedObjects[count] = obj;
	count = count+1;
}

function copyProperties(src, dest){
	dest.setAttribute('width', '30px');
	dest.setAttribute('heigth', '30px');
	dest.setAttribute('backgroundcolor', 'blue');
}
function isValueInArray(arr, val) {
	inArray = false;
	for (i = 0; i < arr.length; i++)
		if (val == arr[i])
			inArray = true;
	return inArray;
}

function myHelper(event, ui){
	var id = event.currentTarget.id;
	var cloned = null;
	switch(id){
		case 'id_t001':
			cloned = "<div id='id_t001_helper' class='helperTools'></div>";
			break;
		case 'id_t002':
			cloned = "<div id='id_t002_helper' class='helperTools'></div>";
			break;
		case 'id_t003':
			cloned = "<div id='id_t003_helper' class='helperTools'></div>";
			break;
		case 'id_t004':
			cloned = "<div id='id_t004_helper' class='helperTools'></div>";
			break;
		case 'id_t005':
			cloned = "<div id='id_t005_helper' class='helperTools'></div>";
			break;
		case 'id_t006':
			cloned = "<div id='id_t006_helper' class='helperTools'></div>";
			break;
		default:
			console.log(msg000);
	}
	return cloned;
}

function displayMsg(msgCode){
	
	switch(msgCode){
		case '001':
			alert(msg001);
			break;
		default:
			alert(msgCode);
	}
}
